<script>
  import "virtual:windi.css";
  import Icon_menu from "$lib/icon/menu.svelte";
  import Icon_beranda from "$lib/icon/beranda.svelte";
  import Icon_tema from "$lib/icon/tema.svelte";
  import Icon_tools from "$lib/icon/tools.svelte";
  import Icon_profil from "$lib/icon/profil.svelte";
  import kategori_post from "/src/kategori-post.js";
  import { browser } from "$app/env";

  let is_menu = false;
  let kategori = kategori_post.sort((a, b) =>
    a.kategori > b.kategori ? 1 : -1
  );
</script>

<svelte:head>
  <link rel="icon" href="/gambar/icon.jpg" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="/code.css" />

  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-2LTKGSC791"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-2LTKGSC791");
  </script>
</svelte:head>

<main class="body">
  <section class="isinya">
    <main class="konten">
      <slot />
    </main>

    <nav class="menu">
      <a href="/" on:click|preventDefault={() => (is_menu = true)}>
        <Icon_menu />
        <span>menu</span>
      </a>
      <a href="/tema" sveltekit:prefetch>
        <Icon_tema />
        <span>tema</span>
      </a>
      <a href="/" sveltekit:prefetch>
        <Icon_beranda />
        <span>home</span>
      </a>
      <a href="/app" sveltekit:prefetch>
        <Icon_tools />
        <span>app</span>
      </a>
      <a href="/profil" sveltekit:prefetch>
        <Icon_profil />
        <span>me</span>
      </a>

      {#if is_menu}
        <section class="full">
          <nav class="isi-menunya">
            <section on:click={() => (is_menu = false)} class="menu-tutup">
              <div />
              <div>&times;</div>
            </section>

            <section class="menu-menu">
              <p>
                <a
                  href="/"
                  class="hover:underline uppercase font-bold"
                  on:click|preventDefault={() => {
                    is_menu = false;
                    if (browser) {
                      const cari = prompt("Cari apa?");
                      if (cari) {
                        location.href = `/cari?q=${encodeURIComponent(cari)}`;
                      }
                    }
                  }}>Cari</a
                >
              </p>
              <!-- <p>
                <a
                  href="/semua"
                  on:click={() => (is_menu = false)}
                  sveltekit:prefetch
                  class="hover:underline">Semua Tulisan</a
                >
              </p> -->
              {#each kategori as x}
                <p class="uppercase mb-1"><strong>{x.kategori}</strong></p>
                <ol>
                  {#each x.subkategori.sort() as y}
                    <li class="ml-3 mb-1">
                      <a
                        sveltekit:prefetch
                        class="hover:underline"
                        href="/?kategori={encodeURIComponent(y)}"
                        on:click={() => (is_menu = false)}
                      >
                        {y}
                      </a>
                    </li>
                  {/each}
                </ol>
              {/each}
            </section>
          </nav>
        </section>
      {/if}
    </nav>
  </section>
</main>

<style lang="windi">
  :global(*) {
    @apply focus:!outline-none;
  }
  .body {
    @apply bg-gradient-to-b from-blue-500 to-violet-500;
  }
  :global(pre, pre code) {
    -moz-tab-size: 2 !important;
  } /* Firefox */
  :global(pre, pre code) {
    tab-size: 2 !important;
  }
  .isinya {
    @apply bg-white w-full max-w-[800px] mx-auto min-h-screen;
  }
  .konten {
    @apply min-h-[calc(100vh-50px)] p-2;
  }
  .menu {
    @apply bg-red-500 w-full sticky bottom-0 left-0 justify-around grid grid-cols-5;
  }
  .menu > a {
    @apply text-white p-2 hover:text-red-900;
  }
  .menu a :global(svg) {
    @apply text-xl block mx-auto;
  }
  .menu span {
    @apply text-center block -mb-1;
    font-size: 12px;
  }
  :global(.judul) {
    font-family: Sacramento, cursive;
  }
  :global(img) {
    @apply max-w-full;
  }

  .full {
    @apply bg-gray-700/60 w-full h-screen fixed top-0 left-0;
  }
  .isi-menunya {
    @apply w-[300px] max-w-[80%] h-screen bg-white fixed top-0 left-0 overflow-auto;
  }
  .menu-tutup {
    @apply bg-black text-white p-1 px-2 text-xl cursor-pointer flex justify-between sticky top-0 left-0;
  }
  .menu-menu {
    @apply p-3;
  }
</style>
