<script>
  import Meta from "$lib/meta.svelte";
  export let judul;
  export let deskripsi;
  export let gambar;
</script>

<svelte:head>
  <Meta {judul} {deskripsi} {gambar} />
  <title>{judul}</title>
</svelte:head>

<h1 class="judul judul-postingan">{judul}</h1>

<article class="artikel">
  <slot />
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
</style>
