<script>
  import { page } from "$app/stores";
  import Meta from "$lib/meta.svelte";

  let cari = $page.url.searchParams.get("q");
</script>

<svelte:head>
  <title>Mencari {cari}</title>
  <Meta judul="Cari" deskripsi="Hasil pencarian" />
</svelte:head>

<h1 class="judul capitalize">Mencari {cari}</h1>

<style lang="windi">
  h1 {
    @apply text-center p-2 text-3xl text-red-700;
  }
</style>
