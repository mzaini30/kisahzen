<script setup="">
	import data from '/src/data'
</script>

<template>
	<div class="container">
		<h1 class='judul'>Kisah Zen</h1>
		<p>
			<router-link to="/post/portofolio">Portofolio</router-link>
		</p>
		<img class='wakatime' src="https://github-readme-stats.vercel.app/api/wakatime?username=mzaini30" alt="" />
		<div class="" v-for='x in data'>
			<h2>{{ x.bulan }}</h2>
			<ol class="list-postingan">
				<li v-for='y in x.postingan'>
					<router-link :to="'/post/' + y.link">{{ y.judul }}</router-link>
				</li>
			</ol>
		</div>
	</div>
</template>

<style scoped="">
h1.judul {
    text-align: center;
}
ol.list-postingan {
    row-gap: .8rem;
    display: flex;
    flex-direction: column;
    /* --jarak: 1rem; */
    margin-top: 1rem;
}
img.wakatime {
    /* margin: auto; */
    /* display: block; */
    float: right;
    margin-bottom: 1rem;
    max-width: 100%;
    margin-left: 1rem;
}
@media (max-width: 762px){
	img.wakatime {
		margin-left: 0;
	}
}
</style>