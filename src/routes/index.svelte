<script>
  import Meta from "$lib/meta.svelte";
  import semua_post from "/src/post.js";
  import { page } from "$app/stores";

  let post = semua_post;

  function cek_kategori() {
    if ($page.url.searchParams.get("kategori")) {
      let kategorinya = $page.url.searchParams.get("kategori");
      post = semua_post.filter((x) => x.kategori == kategorinya);
    } else {
      post = semua_post;
    }
  }

  $: if ($page.url.searchParams.get("kategori")) {
    cek_kategori();
  } else {
    cek_kategori();
  }
</script>

<svelte:head>
  <title>Kisah Zen</title>
  <Meta />
</svelte:head>

<h1 class="judul">Kisah Zen</h1>

<main class="semua-app">
  {#each post as x}
    <section class="app">
      <a href="/post/{x.slug}" sveltekit:prefetch class="card">
        <img src={x.gambar} alt="" />
        <p>
          <span class="judulnya">{x.judul}</span>
          <span class="kategori">{x.kategori}</span>
        </p>
      </a>
    </section>
  {/each}
</main>

<style lang="windi">
  h1 {
    @apply text-center text-3xl text-red-700 py-3 pb-5;
  }
  .semua-app {
    @apply grid gap-2 grid-cols-4 <sm:grid-cols-2;
  }
  .app .card {
    @apply rounded overflow-hidden border border-gray-300 block;
  }
  .app p {
    @apply p-2 text-sm;
  }
  .judulnya {
    @apply block;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .kategori {
    @apply bg-gray-200 rounded px-2 inline-block mt-1;
    font-size: 10px;
  }
  img {
    object-fit: cover;
    @apply w-full h-[25vh] <sm:h-[20vh];
  }
</style>
