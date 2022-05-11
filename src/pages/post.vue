<script setup="">
	import 'prism-theme-vars/base.css'
	import IconRumah from '/src/assets/iconRumah.vue'
	import {onMounted} from 'vue'

	onMounted(() => {
		const judul = document.querySelector('h1').innerText
		document.title = judul
	})
</script>

<template>
	<div class="container isi-postingan">
		<p class="tengah">
			<router-link to="/">
				<IconRumah></IconRumah>
			</router-link>
		</p>
		<router-view></router-view>
		<p class="tengah">
			<router-link to='/'>Baca artikel lainnya</router-link>
		</p>
	</div>
</template>

<style>
	.isi-postingan :where(h1, .tengah) {
		text-align: center;
	}

.isi-postingan h1 {
    --jarak: 1rem;
    margin-top: var(--jarak);
    margin-bottom: var(--jarak);
}
.isi-postingan blockquote {
    background: #36f2fb5e;
    padding: .7rem 1rem;
    border-radius: .5rem;
    /* font-style: italic; */
}
.isi-postingan blockquote p {
	margin-bottom: 0;
}
.isi-postingan img {
    display: block;
    margin: auto;
    max-width: 100%;
    height: auto;
}
</style>