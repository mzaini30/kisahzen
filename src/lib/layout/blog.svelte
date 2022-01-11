<script>
  import Meta from "$lib/meta.svelte";
  import semua_postingan from "/src/post.js";
  import { acak } from "kumpulan-tools";
  export let judul;
  export let deskripsi;
  export let gambar;

  let ambil_postingan = [...semua_postingan];
  let postingan_acak = acak(ambil_postingan).splice(0, 10);
</script>

<svelte:head>
  <Meta {judul} {deskripsi} {gambar} />
  <title>{judul}</title>
</svelte:head>

<h1 class="judul judul-postingan">{judul}</h1>

<article class="artikel">
  <p><img src={gambar} /></p>

  <slot />

  <nav class="wadah-postingan-lainnya">
    {#each postingan_acak as x}
      <a href="/post/{x.slug}" sveltekit:prefetch class="tulisan-lainnya">
        <img src={x.gambar} alt="" />
        <div><p>{x.judul}</p></div>
      </a>
    {/each}
  </nav>
</article>

<div>
  <script>
    document
      .querySelectorAll(".shiki code .line span:first-child")
      .forEach((x) => {
        if (
          (x.innerText == "+" || x.innerText == "-" || x.innerText == "!") &&
          x.getAttribute("style") == "color: #ECEFF4"
        ) {
          x.style.display = "none";
        }
      });
  </script>
</div>

<style lang="windi">
  .judul-postingan {
    @apply text-center text-red-700 text-3xl py-5 pb-2;
  }
  .artikel {
    @apply px-2;
  }
  .artikel > :global(p) {
    margin: 16px 0;
  }
  .artikel :global(blockquote ol) {
    @apply p-2;
  }
  :global(pre) {
    @apply overflow-auto p-2;
  }
  .artikel :global(blockquote) {
    @apply bg-gray-200 text-sm m-0 mb-3;
  }
  :global(blockquote p) {
    @apply p-3 m-0;
  }
  .artikel :global(img) {
    @apply block mx-auto overflow-hidden rounded-lg border border-gray-200;
  }
  .artikel :global(a) {
    @apply underline;
  }
  .artikel :global(:not(pre) > code) {
    @apply bg-red-200;
  }
  .artikel :global(li) {
    @apply ml-5;
  }
  .artikel :global(ol li) {
    @apply list-decimal;
  }
  .wadah-postingan-lainnya {
    @apply grid gap-3;
  }
  .tulisan-lainnya {
    @apply w-full rounded rounded-xl border overflow-hidden flex;
    text-decoration: none !important;
  }
  .tulisan-lainnya img {
    @apply w-23 h-23 rounded-none flex-grow-0 flex-shrink-0;
    object-fit: cover;
  }
  .tulisan-lainnya div {
    @apply m-3 text-sm flex-grow flex-shrink;
  }
  .tulisan-lainnya p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
