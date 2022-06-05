<script setup="">
  import {ref} from 'vue'

  const teksCari = ref('')

  function mulaiCari(){
    let semuaPostingan = document.querySelectorAll('.list-postingan')
    semuaPostingan.forEach(x => {
      if (!x.innerText.toLowerCase().includes(teksCari.value.toLowerCase().trim())){
        x.classList.add('hidden')
      } else {
        x.classList.remove('hidden')
      }
    })
  }

  function reset(){
    teksCari.value = ''
    document.querySelectorAll('.list-postingan').forEach(x => x.classList.remove('hidden')) 
  }
</script>

<template>
	<div class="w-full flex gap-3 mb-4">
    <input 
      v-model='teksCari' 
      type="text" 
      spellcheck="false"
      autocomplete="off"
      @keyup='mulaiCari'
      class="w-full block focus:outline-none rounded p-2" 
      placeholder="Ketik yang mau kamu cari" 
    />
    <button class="bg-slate-700 rounded px-4 py-2 text-white" @click='reset'>reset</button>
  </div>
</template>
