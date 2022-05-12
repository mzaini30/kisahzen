<script setup="">
	import {useRouter} from 'vue-router'
	import {sql, api} from './api'
	import excalibur from 'excalibur-zen'
	import {ref} from 'vue'
	import {Head} from '@vueuse/head'

	const {push} = useRouter()

	const bagianDo = ref('')
	const bagianPlan = ref('')
	const isAdmin = ref(false)

	async function ambilData(){
		let data = await excalibur(sql, {
			id: api,
			kunci: 'ambil',
			username: localStorage.usernameTodo,
			password: localStorage.passwordTodo
		})
		data = await data.json()
		bagianDo.value = data[0].do
		bagianPlan.value = data[0].plan
	}

	async function cek(){
		const halamanLogin = '/tools/todo/login'

		if (!localStorage.usernameTodo){
			push(halamanLogin)
		} else {
			let data = await excalibur(sql, {
				id: api,
				kunci: 'login',
				username: localStorage.usernameTodo,
				password: localStorage.passwordTodo
			})
			data = await data.json()
			if (data[0].banyak < 1){
				push(halamanLogin)
			} else {
				isAdmin.value = true
				ambilData()
			}
		}
	}
	cek()

	async function simpan(){
		const mulaiSimpan = await excalibur(sql, {
			id: api,
			kunci: 'ubah',
			username: localStorage.usernameTodo,
			password: localStorage.passwordTodo,
			do: bagianDo.value,
			plan: bagianPlan.value
		})
		if (mulaiSimpan){
			alert('Berhasil disimpan')
		}
	}
</script>

<template>
	<Head>
		<title>TODO</title>
	</Head>
	
	<form v-if='isAdmin' action="" @submit.prevent='simpan'>
		<div class="row">
			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label">DO</label>
					<textarea name="" v-model='bagianDo' id="" cols="30" rows="10" class="form-control"></textarea>
				</div>		
				<div class="mb-3">
					<input type="submit" value="Simpan" class="btn btn-success" />
				</div>		
			</div>
			<div class="col">
				<div class="mb-3">
					<label for="" class="form-label">PLAN</label>
					<textarea name="" v-model='bagianPlan' id="" cols="30" rows="10" class="form-control"></textarea>
				</div>				
			</div>
		</div>
	</form>
</template>

<style scoped="">
textarea.form-control {
    font-size: 0.9rem;
}
</style>