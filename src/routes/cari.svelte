<script>
  import { page } from "$app/stores";
  import Meta from "$lib/meta.svelte";
  import post from '/src/post.js'
  import {browser} from '$app/env'


  let hasil_pencarian = []

  let cari = $page.url.searchParams.get("q");
  async function mulai_cari(){
    for (let x of post){
      if (browser) {

        let jelajah = await fetch(`/post/${x.slug}`)
        jelajah = await jelajah.text()
        jelajah = jelajah.toLowerCase()


        if (jelajah.includes(cari.toLowerCase())) {
          hasil_pencarian = [...hasil_pencarian, x]
        }
      }
    }
  }
  mulai_cari()
</script>

<svelte:head>
  <title>Mencari {cari}</title>
  <Meta judul="Cari" deskripsi="Hasil pencarian" />
</svelte:head>

<h1 class="judul capitalize">Mencari {cari}</h1>
{JSON.stringify(hasil_pencarian)}

<style lang="windi">
  h1 {
    @apply text-center p-2 text-3xl text-red-700;
  }
</style>
