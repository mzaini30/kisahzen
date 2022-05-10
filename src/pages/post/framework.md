# Jangan Pakai Framework JavaScript!

Apa sih inti dari suatu website? Kan cuma HTML dan CSS. Lalu, buat apa framework JavaScript seperti Svelte, Vue, dan React?

Misalnya aja, kamu ingin membuat sebuah landing page, maka hanya perlu HTML dan CSS. Seperti ini:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		h1 {
			font-size: 30px;
			font-weight: bold;
			text-align: center;
		}
		p {
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>Welcome to My Website</h1>
	<p>Semoga betah ya main di sini...</p>
</body>
</html>
```

Tapi, kalau agak susah bermain styling, bisa lah dibantu dengan Windi:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style lang= "windi">
		h1 {
			@apply text-2xl font-bold text-center
		}
		p {
			@apply text-center
		}
	</style>
</head>
<body>
	<h1>Welcome to My Website</h1>
	<p>Semoga betah ya main di sini...</p>
</body>
</html>
```

Lalu, untuk behavior halaman, bisa kita gunakan Petite Vue. Jadi, partial hydration aja, nggak full.

Kalau kita menggunakan framework JavaScript, kekurangannya adalah:

- full hydration
- size halaman yang besar
- halaman akan terasa berat

Oke, mari kita bahas.

## Full Hydration

Ciri khas dari framework JavaScript adalah full hydration. Artinya, ketika ada perubahan suatu elemen di halaman, maka keseluruhan halaman akan berubah.

Intinya seperti ini:

Ketika ada halaman:

```html
<p>Namaku adalah {{ nama }}</p>
<input type="text" v-model='nama'>
```

Maka, dia akan berubah-ubah di dalam tag p, menyesuaikan isi dari tag input:

```html
<p>Namaku adalah Zen</p>
<input type="text" value="Zen" v-model='nama'>
```		

Sampai di sini mungkin nggak ada masalah dan terlihat bagus. Namun, ada di framework JavaScript itu sebuah teknologi bernama Server Side Rendering (SSR). Kalau Server Side Rendering ini, dia akan mereturn tag-tag HTML, daripada sebuah tag `.app`.

Kalau tanpa SSR:

```html
<div class='app'></div>
<script src='app.js'></script>
```

Dengan SSR:

```html
<div class='app'>
	<p>Namaku adalah Zen</p>
	<input type="text" value="Zen" v-model='nama'>
</div>
<script src='app.js'></script>
```		

Kelihatannya kan kalau pakai SSR ini, dia jadi HTML biasa. Padahal, yang sebenarnya terjadi adalah, ketika `app.js` termuat, maka isi dari `.app` akan kosong dan terisi dengan hasil dari `app.js`. Maka, misalnya di dalam `.app` kita isi sebuah elemen HTML, maka elemen HTML itu akan terhapus kalau `app.js` dimuat.

Maka, kita nggak bisa bermain Adsense dengan framework JavaScript. Bisa sih main Adsense, tapi nggak bisa iklan otomatis karena semua isi dari `.app` akan kembali kosong saat `app.js` termuat dan terisi dengan hasil dari `app.js`. Kan, kode Adsense yang iklan otomatis itu bukan merupakan hasil dari `app.js`, pasti diabaikan.

Lalu, Google juga nggak bisa merayapi halaman tersebut dengan sempurna karena harus menunggu hasil dari `app.js` dulu. Makanya, yang tampil di Google itu biasa isi dari meta description jika kita menggunakan framework JavaScript.

## Size Halaman yang Besar

Kalau dulu, yang namanya framework JavaScript itu akan memuat sebuah `bundle.js`. Sekarang kan ada partial bundle, seperti `index.js`, `about.js`, lalu apakah sizenya menjadi kecil?

Ya nggak juga sih.

Misal kita di `index`, maka yang dimuat adalah `index.js`. Ketika kita klik `about`, kemudian akan memuat `about.js`. Jadi kan dia ditumpuk-tumpuk file JavaScriptnya. Bertambah terus sizenya dengan semakin banyak kita mengklik link. Jadinya, lama kelamaan halaman yang kita buka akan semakin berat.

## Halaman Akan Terasa Berat

Kalau kita menggunakan SSG, misal ada halaman yang perlu dirender dengan Markdown, maka dia akan menampilkan hasil dari Markdownnya menjadi HTML biasa. Kalau dengan framework JavaScript, dia akan memuat library Markdown setiap kali dimuat.