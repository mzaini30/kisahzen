<script setup="">
	import {Head} from '@vueuse/head'

	const app = [
		{
			judul: 'TODO',
			link: 'todo'
		},
		{
			judul: 'Nomor Halaman Ayat',
			link: 'nomor-halaman'
		},
	]
</script>

<template>
	<Head>
		<title>Tools</title>
	</Head>
	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-sm-2">
				<div class="list-group mb-3">
					<router-link to="/" class='list-group-item list-group-item-action'>Beranda</router-link>
				</div>
				<div class="list-group mb-3">
					<router-link v-for='x in app.sort((a, b) => a.judul > b.judul ? 1 : -1)' :to="'/tools/' + x.link" class='list-group-item list-group-item-action'>{{ x.judul }}</router-link>
				</div>
			</div>
			<div class="col-sm">
				<router-view></router-view>				
			</div>
		</div>
	</div>
</template>