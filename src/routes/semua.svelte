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

<h1 class="judul">Semua Kisah Zen</h1>

<main class="semua-app">
  <ol>
    {#each post as x}
      <li>
        <a href="/post/{x.slug}" sveltekit:prefetch class="hover:underline"
          >{x.judul}</a
        >
      </li>
    {/each}
  </ol>
</main>

<style lang="windi">
  h1 {
    @apply text-center text-3xl text-red-700 py-3 pb-5;
  }
  .semua-app li {
    @apply mb-3 list-decimal ml-5;
  }
  .app .card {
    @apply rounded overflow-hidden border border-gray-300 block;
  }
  .app p {
    @apply p-2 text-sm;
  }
  .judulnya {
    @apply block;
  }
  .kategori {
    @apply bg-gray-200 rounded px-2 inline-block mt-1;
    font-size: 10px;
  }
</style>
