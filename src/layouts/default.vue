<script setup="">
  import '@unocss/reset/tailwind.css'
  import 'uno.css'
  import './codeblock.css'
  import './monokai.css'
  import {acak} from 'kumpulan-tools'
  import {useRoute} from 'vue-router'
  const postingan = useDocuments('~/pages/post')

  const {frontmatter} = usePage()

  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]
</script>

<template>
	<Head>
		<link rel="icon" href="/icon.jpeg"/>
    <meta property="og:image" content="https://www.kisahzen.com/cover.jpg">
    <meta name="twitter:image" content="https://www.kisahzen.com/cover.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
	</Head>

  <div class="konten mx-auto w-600px max-w-full p-4">
    <router-link to="/" class='uppercase !no-underline font-bold text-sm'>
      <div class="i-charm-arrow-left inline-block -mb-2px"></div>
      Kembali ke beranda
    </router-link>
    <h1>{{ frontmatter.title }}</h1>
    <p class="text-sm text-center">{{ frontmatter.date.getDate() }} {{ bulan[frontmatter.date.getMonth()] }} {{ frontmatter.date.getFullYear() }}</p>
    <slot/>
    <h2>Tulisan Lainnya</h2>
    <ol class="list-decimal ml-5">
      <li v-for='x in acak(postingan).filter(x => x.href != useRoute().path).filter((x, n) => n < 5)' class='mb-2'>
        <router-link :to="x.href">{{ x.title }}</router-link>
      </li>
    </ol>
  </div>
</template>

<style>
  .konten :not(pre) > code {
    @apply font-bold
  }
  .konten a {
    @apply underline
  }
  .konten img {
    @apply block mx-auto rounded
  }
	.konten strong {
		@apply font-bold
	}
	.konten em {
		@apply italic
	}
  .konten h1 {
    @apply text-3xl font-bold text-center
  }
  .konten h2 {
    @apply text-2xl font-bold
  }
  .konten h3 {
    @apply text-xl font-bold
  }
  .konten h4 {
    @apply text-lg font-bold
  }
  .konten > * {
    @apply mb-4 block
  }
  .line-numbers-mode {
    @apply bg-#272822 text-#f8f8f2 rounded overflow-hidden !pl-53px
  }
  .highlighted {
    @apply !bg-slate-500/50
  }
</style>
