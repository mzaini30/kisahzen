<script setup="">
  const postingan = useDocuments('~/pages/post')
</script>

<template layout='beranda'>
  <div class="w-full p-4 min-h-screen bg-slate-300">
    <router-link v-for='x in postingan' class='text-sm rounded bg-slate-700 px-5 py-2 text-white inline-block mr-3 mb-3' :to="x.href">{{ x.title }}</router-link>
  </div>
</template>