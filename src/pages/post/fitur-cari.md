# Membuat Fitur Pencarian Tanpa Server

Fitur pencarian di sebuah blog atau website adalah fitur yang sangat penting. Sebab, dengan adanya fitur pencarian, akan memudahkan user dalam menjelajahi website berdasarkan minat yang ingin ia cari.

Ketika kita mendengar fitur pencarian, maka yang terbayang di benak kita adalah sekumpulan kode <router-link to='/post/no-cors'>server</router-link> untuk membangunnya, baik itu menggunakan PHP maupun <router-link to='/post/framework'>JavaScript</router-link> yang server side. Tapi, pernah nggak terbayang bahwa kita juga bisa membuatnya tanpa melibatkan server sama sekali?

Nah, kali ini aku akan memberi tau kepada kalian bagaimana cara membuat fitur pencarian tanpa menggunakan server sama sekali. Prinsip yang akan aku jabarkan di artikel ini adalah teknik yang kupakai untuk fitur pencarian di blog ini. Jadi, blog ini murni 100% HTML aja, tanpa melibatkan server.

Kenapa nggak pakai server? Ya pengen aja sih. Juga, jika nggak pakai server, akan menghemat pengeluaranku dengan hanya membayar perpanjangan domain, tanpa perlu sewa biaya hosting. Oh iya, blogku ini hostingnya free pakai Github Pages. Ya mumpung gratis sih. Hehehehe.. Kalau di Github Pages, dia cuma menyediakan hosting HTML, jadi nggak bisa menjalankan PHP di situ.

Untuk membuat fitur pencarian tanpa menggunakan server, kita buat dulu sebuah file bernama `post.js` yang berisi:

```javascript
export default [
	{
		judul: "Ikan yang Bagus",
		slug: "ikan",
	},
	{
		judul: "Sepeda Baru",
		slug: "sepeda",
	},
	{
		judul: "Kotak Pandora",
		slug: "pandora",
	},
];
```

Nah, `post.js` ini berfungsi sebagai daftar isi yang menampung data judul dan slug semua postingan di blog kita. Jadi, prinsip fitur pencariannya itu ya nanti mendapatkan daftar isi itu dulu, baru mulai menjelajah.

Sekarang, kita buat isi dari masing-masing postingan:

`ikan.html`:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>Ikan yang Bagus</h1>
		<p>
			Ini adalah ikan yang sangat bagus. Apa kamu menyukainya? Kalau aku, sangat
			suka.
		</p>
	</body>
</html>
```

`sepeda.html`:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>Sepeda Baru</h1>
		<p>Eh, aku punya sepeda baru loh. Kamu mau nyoba nggak?</p>
	</body>
</html>
```

`pandora.html`:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<h1>Kotak Pandora</h1>
		<p>Jadi, zaman dulu itu, ada yang namanya kotak pandora...</p>
	</body>
</html>
```

Nah, sekarang kita buat nih file `index.html` yang berisi fitur pencarian:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>

		<style>
			[v-cloak] {
				display: none;
			}
		</style>
	</head>
	<body>
		<main class="app" v-cloak>
			<h1>Cari Apa?</h1>
			<form action="" @submit.prevent="mulai_cari">
				<input
					type="search"
					autocomplete="off"
					placeholder="Tulis di sini"
					@keydown="pesan_nggak_ada = false"
					v-model="cari"
					required
				/>
			</form>

			<p v-if="pesan_nggak_ada">{{ cari }} nggak ada</p>

			<ol v-if="hasil">
				<li v-for="x in hasil">
					<a :href="'/' + x.slug + '.html'">{{ x.judul }}</a>
				</li>
			</ol>
		</main>

		<script type="module">
			import { createApp } from "https://unpkg.com/petite-vue@0.4.0/dist/petite-vue.es.js?module";
			import post from "./post.js";

			createApp({
				cari: "",
				hasil: [],
				banyak_ketemu: 0,
				pesan_nggak_ada: false,

				async mulai_cari() {
					this.hasil = [];
					this.banyak_ketemu = 0;
					this.pesan_nggak_ada = false;

					for (let x of post) {
						let ambil_html = await fetch(`/${x.slug}.html`);
						ambil_html = await ambil_html.text();

						if (ambil_html.includes(this.cari)) {
							this.banyak_ketemu++;
							this.hasil = [...this.hasil, x];
						}
					}

					if (this.banyak_ketemu == 0) {
						this.pesan_nggak_ada = true;
					}
				},
			}).mount(".app");
		</script>
	</body>
</html>
```

Jadinya tu nanti seperti ini:

![Contoh mencari pandora](https://i.postimg.cc/ZRvrZ9qY/image.png)

Dan ketika kita mencari teks yang nggak ada di file-file HTML itu, maka ada pesan peringatan:

![Mencari teks yang nggak ada di file-file HTML](https://i.postimg.cc/CxKnSZPy/image.png)

Jadinya seperti ini:

<iframe src='https://quark-speckled-production.glitch.me/'></iframe>

Ternyata tanpa menggunakan server, kita juga bisa loh membuat website yang interaktif. Jadi cuma dibutuhkan HTML, <router-link to='/post/css'>CSS</router-link>, dan JS aja. Contohnya ya seperti itu tadi, fitur pencarian tanpa server sama sekali. Gimana? Tertarik untuk belajar web development lebih lanjut?