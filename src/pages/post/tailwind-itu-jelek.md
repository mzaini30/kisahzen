# Kenapa Aku Lebih Suka Pakai Bootstrap daripada Tailwind?

Sebenarnya nggak cocok sih membandingkan Bootstrap sama Tailwind. Soalnya kan, itu dua hal yang berbeda. Mungkin lebih cocok membandingkan Tailwind dengan pure CSS ya? Soalnya itu lebih mirip.

Kalau di Bootstrap (dan kawan-kawan; Bulma, Materialize, UI Kit, W3 CSS), elemen-elemen yang kita butuhkan itu tinggal pakai classnya aja. Misalnya kita ingin menampilkan tombol, maka kodenya itu seperti ini:

```html
<div class="btn btn-success">Ini tombol</div>
```

Nah sekarang, bandingkan sama Tailwind:

```html
<div class="px-2 py-1 rounded shadow bg-green-200">Ini tombol</div>
```

Atau, bisa juga dituliskan seperti ini:

```html
<div class="tombol">Ini tombol</div>

<style>
	.tombol {
		@apply px-2 py-1 rounded shadow bg-green-200
	}
</style>
```

Beda banget kan? Kalau di Bootstrap (dan kawan-kawan), satu class itu jelas banget fungsinya. Misalnya `btn` (atau `button` kalau di Bulma), itu berarti **tombol**. Kalau di Tailwind, kita tentukan padding x berapa, padding y berapa, bulet, ada bayangan, dan warna latarnya. Itu kan sama seperti kita menuliskan CSS biasa tapi lebih singkat.

Kalau menggunakan CSS biasa, mungkin seperti ini:

```html
<div class="tombol">Ini tombol</div>

<style>
	.tombol {
		padding: .5rem .25rem;
		border-radius: .5rem;
		box-shadow: 0 0 1rem .25rem gray;
		background-color: green;
	}
</style>
```

Lebih panjang sih, tapi nggak masalah sebenarnya?

## Apa yang Membuat Bootstrap Lebih Unggul?

Bootstrap sama Tailwind itu sebenarnya membawa niat yang sama, dan sama-sama mulia, yaitu mempermudah kita styling suatu halaman website. Tapi, pendekatannya aja yang berbeda. Kalau Bootstrap, style untuk tombol ya namanya btn. Kalau Tailwind, kalau mau membuat tombol, berarti harus tentukan dulu ukurannya, warnanya, dan bentuknya. Tapi, keduanya sebenarnya sama-sama mempermudah.

Namun, Bootstrap lebih unggul karena nggak perlu proses compiling kode-kode yang aslinya bukan CSS menjadi CSS. Soalnya, Bootstrap ya sudah kumpulan CSS itu sendiri. Tinggal pakai. Jadi, nggak ada proses yang membebani laptop saat styling menggunakan Bootstrap. Yang penting tinggal kita panggil aja class-classnya.

> Baca juga: <router-link to='/post/ssh-github-termux'>Menghubungkan Termux dengan Github Menggunakan SSH</router-link>

Kita ingat kan ya dulu itu sebelum adanya Tailwind JIT, untuk memproses sebuah file tailwind.css aja memerlukan waktu yang lama. Dengan Tailwind JIT (yang terinspirasi dari Windi), proses compiling kode-kode Tailwind menjadi CSS lebih cepat. Tapi ya tetap aja, perlu engine untuk terus watch dan mengolahnya menjadi CSS.

Mungkin yang menjadi kelemahan Bootstrap adalah ukurannya yang besar. Tapi nggak masalah sih jika kita memiliki server yang cepat. Terus, ukurannya sebenarnya nggak terlalu besar. Lebih besar Bulma sih. Terus, ada beberapa cara sih sebenarnya untuk mengatasi waktu yang terbuang saat load framework CSS seperti Bootstrap ini:

1. Pakai server yang cepat

	Itu yang sudah kusebutkan tadi.

2. Pakai CDN

	Soalnya, CDN itu berarti memanggil server yang dekat dari pengakses website kita.

3. Gunakan framework JS

	Dengan menggunakan framework JS, load Bootstrap hanya sekali. Terus, pas klik-klik link, nggak ada load ulang.

4. Gunakan PWA

	Dengan menggunakan PWA, semua aset termasuk Bootstrap akan disimpan di storage browser sehingga saat website diakses lagi, nggak perlu load ulang Bootstrapnya.

5. Manfaatkan Indexed DB

	Indexed DB merupakan penyimpanan browser yang sangat besar. Untuk satu website, jatahnya adalah 1 GB sampai setengah storage laptop yang bisa digapai oleh browser. Besar banget kan? Makanya, Indexed DB ini cocok buat menampung berbagai macam aset suatu website seperti Bootstrap. Bahkan, ukuran penyimpanan ini lebih besar daripada storage PWA yang hanya sekian MB.

	Terus, kalau misalnya ingin menggunakan Indexed DB, bisa menggunakan library yang memudahkan seperti localforage maupun idb-keyval. Kalau menggunakan localforage, dia cara menggunakannya mirip dengan localStorage:

	```javascript
	import {get, set} from 'localforage'

	// memanggil
	async function ambil(){
		const data = await get('data')
		console.log(data)
	}
	ambil()

	// menyimpan
	async function simpan(){
		let mauSimpan = await set('data', {
			nama: 'Zen',
			rumah: 'Samarinda'
		})
		if (mauSimpan){
			console.log('Berhasil disimpan')
		}
	}
	simpan()
	```

## Custom Styling Saat Menggunakan Bootstrap

Tentu kita ingin custom tampilan saat membuat website. Ya kalau klien minta sih. Kalau klien nggak minta custom, lebih enak jika kita pakai style-style bawaan Bootstrap. Jadi lebih cepat jadi kan websitenya? Nah, kalau kita custom tampilan saat menggunakan Bootstrap, ada beberapa rambu sih:

1. Sebisa mungkin hindari penggunaan `!important`

	Dalam CSS, `!important` itu udah seperti `const` kalau di JavaScript. Jadi, style yang kita tentukan di situ, nggak bisa diubah-ubah lagi. Kan repot jadinya.

2. Jangan tumpuk style-style Bootstrap

	Misalnya kita ingin styling button, jangan tumpuk style `btn` seperti ini:

	```css
	.btn {
		width: 100%;
	}
	```

	Baiknya, kita gunakan style baru seperti ini:

	```html
	<div class="btn lebar-full">Ini tombol</div>

	<style>
		.lebar-full {
			width: 100%;
		}
	</style>
	```

3. Kelompokkan style-style

	Ini supaya mudah sih menggunakannya. Jadi, jangan semua custom CSS kita tumpuk di file `global.css`. Ini selain file `global.css` yang menjadi bengkak, kita juga jadi kesusahan jika ingin menerapkan style tertentu di halaman tertentu. Kalau aku sih, biasanya pakai tag style jika ingin styling di halaman itu aja. Terus, kalau perlu satu style untuk banyak halaman, tentunya nggak ditumpuk di `global.css`. Jadi, ada lebih dari satu file CSS. Ya nggak masalah sih. Jadi mudah juga pengorganisasiannya.