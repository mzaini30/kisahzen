<script setup="">
  import '@unocss/reset/tailwind.css'
  import 'uno.css'
  import './codeblock.css'
  import './monokai.css'

  const {frontmatter} = usePage()
</script>

<template>
	<Head>
		<link rel="icon" href="/icon.jpg"/>
	</Head>
  <div class="konten p-4">
    <router-link to="/" class='uppercase font-bold text-sm'>
      <div class="i-charm-arrow-left inline-block -mb-2px"></div>
      Kembali ke beranda
    </router-link>
    <h1>{{ frontmatter.title }}</h1>
    <slot/>
  </div>
</template>

<style>
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
    @apply mb-3 block
  }
  .line-numbers-mode {
    @apply bg-#272822 text-#f8f8f2 rounded overflow-hidden
  }
  .highlighted {
    @apply !bg-slate-500/50
  }
</style>
