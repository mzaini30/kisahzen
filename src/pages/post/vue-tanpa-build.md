# Mencoba Menggunakan Vue Tanpa Build

Pertama, download dulu Vue-nya dari <https://unpkg.com/vue@3.2.33/dist/vue.global.prod.js>. Lalu, ubah file `vue.global.prod.js` jadi `vue.js`.

Jadi, di sini aku akan menulis ulang aplikasi global state yang sudah aku bahas di <router-link to='/post/global-state-vue'>Super Simpel Global State di Vue</router-link>. Kalau di situ aku pakai Vite (bisa juga sih kalau mau pakai Vue CLI; intinya, pakai bundler). Sekarang, kita coba yang nggak pakai bundler.

Isi file `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
</head>
<body>
	<div class="app">
		<Tampil></Tampil>
		<Ubah></Ubah>
	</div>

	<script src="vue.js"></script>

	<script src="tampil.js"></script>
	<script src="ubah.js"></script>
	<script src="store.js"></script>

	<script>
		Vue.createApp({})
			.component('Tampil', Tampil)
			.component('Ubah', Ubah)
			.mount('.app')
	</script>
</body>
</html>
```

> Baca juga: <router-link to='/post/template-string-vue'>Mengaktifkan Template String Vue di Sublime</router-link>

Isi file `tampil.js`:

```javascript
const Tampil = {
	data(){
		return {
			store
		}
	},
	template: `<p>Datanya: {{ store.data }}</p>`
}
```

Isi file `ubah.js`:

```javascript
const Ubah = {
	data(){
		return {
			store
		}
	},
	template: `<button @click='store.data = Math.random()'>Ubah</button>`
}
```

Isi file `store.js`:

```javascript
const store = Vue.reactive({
	data: Math.random()
})
```