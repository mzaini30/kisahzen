<script>
  import { page } from "$app/stores";
  import Meta from "$lib/meta.svelte";
  import post from "/src/post.js";
  import { browser } from "$app/env";

  let hasil_pencarian = [];
  let cari = "";

  async function mulai_cari() {
    if (browser && location.search) {
      cari = new URLSearchParams(location.search).get("q");
      for (let x of post) {
        let jelajah = await fetch(`/post/${x.slug}`);
        jelajah = await jelajah.text();
        jelajah = jelajah.toLowerCase();
        jelajah = jelajah.replace(/[\s\S]*<article/, "");
        jelajah = jelajah.replace(/<\/article[\s\S]*/, "");

        if (jelajah.includes(cari.toLowerCase())) {
          hasil_pencarian = [...hasil_pencarian, x];
        }
      }
      hasil_pencarian = [...new Set(hasil_pencarian)];
    }
  }
  mulai_cari();

  $: if ($page.url.searchParams.get("q")) {
    hasil_pencarian = "";
    mulai_cari();
  }
</script>

<svelte:head>
  <title>Mencari {cari}</title>
  <Meta judul="Cari" deskripsi="Hasil pencarian" />
</svelte:head>

<h1 class="judul capitalize">Mencari {cari}</h1>

<!-- {JSON.stringify(hasil_pencarian)} -->

<main class="hasil-pencarian">
  {#each hasil_pencarian as x}
    <a sveltekit:prefetch href="/post/{x.slug}" class="kotak">
      <img src={x.gambar} alt={x.judul} />
      <span class="list-judul">
        <p>{x.judul}</p>
      </span>
    </a>
  {/each}
</main>

<style lang="windi">
  h1 {
    @apply text-center p-2 text-3xl text-red-700;
  }
  .hasil-pencarian {
    @apply grid gap-3;
  }
  .hasil-pencarian a {
    @apply block rounded rounded-xl border border-gray-200 overflow-hidden flex;
  }
  .hasil-pencarian .list-judul {
    @apply p-3 flex-grow flex-shrink text-sm;
  }
  .hasil-pencarian p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .hasil-pencarian img {
    @apply w-25 h-25 flex-grow-0 flex-shrink-0;
    object-fit: cover;
  }
</style>
