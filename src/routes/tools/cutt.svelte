<script>
  import Meta from "$lib/meta.svelte";
  import { browser } from "$app/env";

  let link_jadi = 0;
  let semua_link = 0;
  let input = "";
  let output = "";

  function cek() {
    if (browser && localStorage.cutt) {
      input = localStorage.cutt_input;
      output = localStorage.cutt;
    }
  }
  cek();

  function stop() {
    if (browser) {
      localStorage.cutt = output;
      localStorage.cutt_input = input;
      location.reload();
    }
  }

  function reset() {
    if (browser) {
      link_jadi = 0;
      semua_link = 0;
      input = "";
      output = "";
      localStorage.cutt = "";
      localStorage.cutt_input = "";
    }
  }

  async function olah() {
    let linknya = input.split("\n").filter((x) => x);
    semua_link = linknya.length;

    for (let x of linknya) {
      let jadi = await fetch(`https://cutt.us/api.php?url=${x}`);
      jadi = await jadi.text();
      output += jadi + "\n";
      if (jadi) {
        link_jadi++;
      }
    }
  }
</script>

<svelte:head>
  <title>Cutt</title>
  <Meta
    judul="Cutt"
    deskripsi="Singkatin URL dengan Cutt"
    gambar="https://i.postimg.cc/K8Lgr4mG/Tungsten-Lamp-Inspiration-Small-Icon-Cartoon-Cartoon-Icons-Lamp-Icons-Small-Icons-PNG-and-Vector.jpg"
  />
</svelte:head>

<h1 class="judul">Cutt</h1>

<main class="app">
  <p>Masukkan URL</p>
  <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    placeholder="linkPertama
linkKedua
linkKetiga"
    bind:value={input}
  />
  <button on:click={olah}>Olah</button>
  <button on:click={stop}>Stop</button>
  <button on:click={reset}>Reset</button>
  <p>Hasil ({link_jadi}/{semua_link})</p>
  <textarea name="" id="" cols="30" rows="10" readonly bind:value={output} />
</main>

<style lang="windi">
  h1 {
    @apply text-center p-2 text-3xl text-red-700;
  }
  p {
    @apply pt-2;
  }
  textarea {
    @apply border border-red-700 w-full rounded p-2;
  }
  button {
    @apply border border-red-700 text-red-700 bg-red-100 hover:(border-red-100 text-red-100 bg-red-700) focus:(border-red-100 text-red-100 bg-red-700) px-3 py-1 rounded;
  }
  [readonly] {
    @apply bg-gray-200;
  }
</style>
