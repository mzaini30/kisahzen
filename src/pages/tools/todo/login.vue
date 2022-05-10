<script setup="">
	import excalibur from 'excalibur-zen'
	import {sql, api} from './api'
	import {ref} from 'vue'
	import {useRouter} from 'vue-router'

	const {push} = useRouter()

	const username = ref('')
	const password = ref('')

	async function cek(){
		let data = await excalibur(sql, {
			id: api,
			kunci: 'login',
			username: username.value,
			password: password.value
		})
		data = await data.json()
		if (data[0].banyak < 1){
			alert('Username dan password salah')
		} else {
			localStorage.usernameTodo = username.value
			localStorage.passwordTodo = password.value
			push('/tools/todo')
		}
	}
</script>

<template>
	<div class="container mt-3">
		<form action="" @submit.prevent='cek'>
			<div class="mb-3">
				<label for="" class="form-label">Username</label>
				<input type="text" v-model='username' class="form-control" required="required" />
			</div>
			<div class="mb-3">
				<label for="" class="form-label">Password</label>
				<input type="password" v-model='password' class="form-control" required="required" />
			</div>
			<div class="mb-3">
				<input type="submit" value="Login" class="btn btn-success" />
			</div>
		</form>
	</div>
</template>