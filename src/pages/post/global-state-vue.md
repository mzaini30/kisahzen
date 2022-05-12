# Super Simpel Global State di Vue

Isi dari `state.js`:

```javascript
import {ref} from 'vue'

const state = ref(Math.random())

export default function(){
	return {
		set(nilai){
			state.value = nilai
		},
		get(){
			return state.value
		}
	}
}
```

Isi dari `App.vue`:

```html
<script setup="">
	import Tampil from './tampil.vue'
	import Ubah from './ubah.vue'
</script>

<template>
	<Tampil></Tampil>
	<Ubah></Ubah>
</template>
```

Isi dari `tampil.vue`:

```html
<script setup="">
	import store from './state.js'

	const {get} = store()
</script>

<template>
	<p>Datanya: {{ get() }}</p>
</template>
```

Isi dari `ubah.vue`:

```html
<script setup="">
	import store from './state'

	const {set} = store()
</script>

<template>
	<button @click='set(Math.random())'>Ubah</button>
</template>
```

Hasil:

![](https://i.ibb.co/bgH3w33/image.png)

Pas diklik `Ubah`:

![](https://i.ibb.co/ZNBDtBr/image.png)