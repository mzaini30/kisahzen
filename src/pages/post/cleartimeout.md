# Jangan Lupa clearTimeout

Biasanya, kalau ingin membuat redirect ke halaman tertentu setelah waktu tertentu di Vue, kita menggunakan `setTimeout` seperti ini:

```html
<script setup="">
	import {useRouter} from 'vue-router'
	import {onMounted} from 'vue'

	const {push} = useRouter()

	function beralih(){
		push('/halaman-kedua')
	}
	function menit(angka){
		return angka * 60 * 1000
	}

	onMounted(() => setTimeout(beralih, menit(5)))
</script>

<template>
	<p>Hai</p>
</template>
```

Pada kode di atas, kita memerintahkan kepada browser untuk beralih ke `halaman-kedua` setelah 5 menit. Tapi, yang jadi masalah adalah misalnya kita sudah berada di halaman lain (misal `halaman-ketiga`). Namun, timernya itu sebenarnya masih terus jalan. Timer yang 5 menit itu. Kok bisa? Soalnya kan ketika beralih halaman di Vue, dia nggak ada reload. Otomatis, perintah `setTimeout` itu masih terus berjalan. Nah, solusinya adalah kita destroy setelah beralih halaman.

```html
<script setup="">
	import {useRouter} from 'vue-router'
	import {onMounted, onUnmounted} from 'vue'

	const {push} = useRouter()

	function beralih(){
		push('/halaman-kedua')
	}
	function menit(angka){
		return angka * 60 * 1000
	}

	let timer

	onMounted(() => timer = setTimeout(beralih, menit(5)))
	onUnmounted(() => clearTimeout(timer))
</script>

<template>
	<p>Hai</p>
</template>
```

> Baca juga: <router-link to='/post/no-cors'>Mengatasi Error CORS Tanpa Setting Server</router-link>