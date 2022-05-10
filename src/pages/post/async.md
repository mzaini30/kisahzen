# Kenapa async/await Itu Wajib Kita Gunakan di JavaScript?

Apa itu asyncronous dan apa itu syncronous? Pertama, kita harus tau dulu perbedaan konsep antara keduanya. Bahasa pemrograman apapun, kebanyakan itu ya syncronous, tapi ada beberapa hal yang asyncronous.

Syncronous itu seperti ini:

```javascript
const nama = 'Zen'
console.log(`Hai ${nama}`)
```

Berdasarkan kode di atas, kita dapat langsung memanggil `nama` yang sebelumnya sudah dideklarasikan. Tanpa perlu ada delay maupun waktu menunggu. Nah, ini yang namanya syncronous.

Kalau asyncronous, contohnya seperti ini:

```javascript
fetch('https://kisahzen.com').then(x => x.text()).then(x => console.log('Website berhasil diakses'))
```

Kalau menurut kode di atas, kita harus **menunggu** terlebih dahulu hingga website Kisah Zen dapat difetch. Setelah difetch, kita ambil isi HTMLnya dengan atribut `.text()`. Setelah itu, muncul tulisan `Website berhasil diakses`.

Lalu, bagaimana jika kita nggak menunggu terlebih dahulu, alias nggak pakai `.then()`? Contohnya seperti ini:

```javascript
fetch('https://kisahzen.com')
console.log('Website berhasil diakses')
```

Apa yang terjadi? Ternyata, tulisan `Website berhasil diakses` itu munculnya **sebelum** event fetch Kisah Zen. Itu karena `console.log` nggak menunggu Kisah Zen termuat terlebih dahulu.

## Callback Hell

Pernah mendengar Callback Hell? Nah, itu istilah untuk menamakan asyncronous yang berlapis-lapis. `.then()` pada asyncronous, disebut sebagai callback, atau fungsi yang dijalankan setelah fungsi sebelumnya _selesai_. Contoh dari callback hell itu seperti ini:

1. Aku mau mendapatkan `https://kisahzen.com`
2. Setelah itu, aku mau mendapatkan `https://jeyjingga.com/`
3. Lalu, aku mau mendapatkan `https://www.hijrahfinansial.com/`
4. Lalu, aku ingin mendapatkan `https://pe-we.com/`
5. Terakhir, aku ingin mendapatkan `https://www.maritaningtyas.com/`

Kalau kita menggunakan fetch biasa, kodenya akan seperti ini:

```javascript
fetch('https://kisahzen.com').then(x => x.text()).then(() => {
	console.log('Kisah Zen berhasil diakses')

	fetch('https://jeyjingga.com').then(x => x.text()).then(() => {
		console.log('Jey Jingga berhasil diakses')

		fetch('https://www.hijrahfinansial.com').then(x => x.text()).then(() => {
			console.log('Hijrah Finansial berhasil diakses')

			fetch('https://pe-we.com').then(x => x.text()).then(() => {
				console.log('Pe We berhasil diakses')

				fetch('https://www.maritaningtyas.com').then(x => x.text()).then(() => {
					console.log('Marita Ningtyas berhasil diakses')
				})
			})
		})
	})
})
```

Wew... bercabang sangat banyak seperti kena kame-kame-ha. Ngeri banget eh ngelihatnya.

## async/await adalah Solusinya

Kalau kita menggunakan async/await, maka kodenya nggak sedalam seperti di atas. Jadi, kodenya seperti ini:

```javascript
async function panggil(){
	let kisahZen = await fetch('https://kisahzen.com')
	kisahZen = await kisahZen.text()
	if (kisahZen){
		console.log('Kisah Zen berhasil diakses')
	}

	let jeyJingga = await fetch('https://jeyjingga.com')
	jeyJingga = await jeyJingga.text()
	if (jeyJingga){
		console.log('Jey Jingga berhasil diakses')
	}

	let hijrahFinansial = await fetch('https://www.hijrahfinansial.com')
	hijrahFinansial = await hijrahFinansial.text()
	if (hijrahFinansial){
		console.log('Hijrah Finansial berhasil diakses')
	}

	let pewe = await fetch('https://pe-we.com')
	pewe = await pewe.text()
	if (pewe){
		console.log('Pe We berhasil diakses')
	}

	let marita = await fetch('https://www.maritaningtyas.com')
	marita = await marita.text()
	if (marita){
		console.log('Marita Ningtyas berhasil diakses')
	}
}
panggil()
```

Dengan async/await, kita bisa terhindar dari callback hell.