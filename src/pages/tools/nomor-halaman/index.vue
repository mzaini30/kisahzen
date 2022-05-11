<script setup="">
	import {ref} from 'vue'
	import dataSurat from './dataSurat'
	import {Head} from '@vueuse/head'

	const nomorHalaman = ref('')
	const juz = ref('')
	const surat = ref('')

	function olahJuz(){
		let listDatang = nomorHalaman.value.split('\n').filter(x => x)
		let listHasil = []
		for (let x of listDatang){
			let juznya = 0
			if (x == 1){
				juznya = 1
			} else if (x < 602){
				let nilai = (x-1) / 20
				nilai = Math.ceil(nilai)
				juznya = nilai
			} else if (x <= 604) {
				juznya = 30
			} else {
				juznya = ''
			}
			listHasil = [...listHasil, juznya]
		}
		juz.value = listHasil.join('<br />')
	}

	function olahSurat(){
		let list = nomorHalaman.value.split('\n').filter(y => y)
		let listHasil = []
		for (let x of list){
			listHasil = [...listHasil, dataSurat[x-1]]
		}
		listHasil = listHasil.join('<br />')
		surat.value = listHasil
	}

	function olah(){
		olahJuz()
		olahSurat()
	}
</script>

<template>
	<Head>
		<title>Nomor Halaman Ayat</title>
	</Head>
	
	<form action="" @submit.prevent='olah'>
		<div class="row">
			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label">Nomor Halaman Quran</label>
					<textarea name="" id="" cols="30" rows="10" v-model='nomorHalaman' class="form-control" required="required"></textarea>
				</div>
				<div class="mb-3">
					<input type="submit" value="Olah" class="btn btn-success" />
				</div>
			</div>
			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label">Juz</label>
					<div class="form-control hasil" v-html='juz'></div>
				</div>
			</div>
			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label">Surat</label>
					<div class="form-control hasil" v-html='surat'></div>
				</div>
			</div>
		</div>
	</form>
</template>

<style scoped="">
.form-control.hasil {
    height: 15.8rem;
    user-select: all;
}

.form-control.hasil {
    overflow-y: auto;
}
</style>