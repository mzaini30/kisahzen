<script setup="">
  const postingan = useDocuments('~/pages/post')
</script>

<template layout='beranda'>
  <Head>
    <meta property="og:image" content="https://www.kisahzen.com/cover.jpg">
    <meta name="twitter:image" content="https://www.kisahzen.com/cover.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>

  <div class="hidden"></div>

  <div class="w-full p-4 min-h-screen bg-slate-300">
    <Cari client:visible></Cari>

    <div>
      <router-link 
        v-for='x in postingan.sort((a, b) => a.date > b.date ? 1 : -1)' 
        class='list-postingan text-sm rounded bg-slate-700 px-5 py-2 text-white inline-block mr-3 mb-3' 
        :to="x.href"
      >{{ x.title }}</router-link>
    </div>
  </div>
</template>