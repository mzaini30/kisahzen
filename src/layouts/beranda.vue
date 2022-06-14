<script setup="">
import "@unocss/reset/tailwind.css";
import "uno.css";
</script>

<template>
  <Head>
    <link rel="icon" href="/icon.jpeg" />
  </Head>

  <slot />
</template>

<style>
* {
  word-wrap: break-word;
}
</style>
