<script setup="">
	const app = [
		{
			judul: 'Nomor Halaman Ayat',
			link: 'nomor-halaman'
		}
	]
</script>

<template>
	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-sm-2">
				<div class="list-group">
					<router-link v-for='x in app' :to="'/tools/' + x.link" class='list-group-item list-group-item-action'>{{ x.judul }}</router-link>
				</div>
			</div>
			<div class="col-sm">
				<router-view></router-view>				
			</div>
		</div>
	</div>
</template>