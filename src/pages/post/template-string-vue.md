# Mengaktifkan Template String Vue di Sublime

Secara default, tampilan file JavaScript di Sublime itu seperti ini:

```javascript
const Ubah = {
	data(){
		return {
			store
		}
	},
	template: `<button @click='store.data = Math.random()'>Ubah</button>`
}
```

Sebenarnya nggak ada masalah. Tapi, kita pengennya itu, setiap ada _string literal_ itu kebacanya sebagai template Vue. Pengennya itu seperti ini:

![](https://i.ibb.co/jMPJXZB/image.png)

Jadi, caranya adalah pertama kita harus install dulu package Vue di Sublime buat mewarnai sintaks Vue.

Kalau sudah, sekarang buka `~/.config/sublime-text/Packages/User/`. Lalu, buat file `ES6.sublime-syntax` yang berisi:

```yaml
%YAML 1.2
---

name: ES6
file_extensions:
  - js
  - component.js
  - page.js
scope: source.js.parasails
contexts:
  main:
    - match: ""
      push: scope:source.js
      with_prototype:
      - match: '`'
        push:
          - meta_content_scope: text.html.vue.embedded.js
          - match: '`'
            pop: true
          - match: (?=.*<[a-zA-Z_])
            embed: scope:text.html.vue
            escape: (?=`)
          - match: (?=.*\{\s*$)
            embed: scope:source.css
            escape: (?=`)
          - match: '[^`]+'
            scope: string.template.js
```

Nah sekarang, udah otomatis setiap yang berada dalam string literal, akan terwarnai dengan sintaks Vue jika dia merupakan sintaks Vue, terwarnai sintaks CSS jika merupakan CSS, dan jika tidak keduanya, akan terwarnai sebagai string biasa.

> Baca juga: <router-link to='/post/global-state-vue'>Super Simpel Global State di Vue</router-link>

## Aku Pengennya Sih Bukan Terwarnai sebagai Vue, Tapi Sebagai HTML Biasa

Oke, berarti ubah yang `html.vue` di kode di atas menjadi `html.basic`. Jadinya seperti ini:

```yaml
%YAML 1.2
---

name: ES6
file_extensions:
  - js
  - component.js
  - page.js
scope: source.js.parasails
contexts:
  main:
    - match: ""
      push: scope:source.js
      with_prototype:
      - match: '`'
        push:
          - meta_content_scope: text.html.basic.embedded.js
          - match: '`'
            pop: true
          - match: (?=.*<[a-zA-Z_])
            embed: scope:text.html.basic
            escape: (?=`)
          - match: (?=.*\{\s*$)
            embed: scope:source.css
            escape: (?=`)
          - match: '[^`]+'
            scope: string.template.js
```

Kode ini aku dapatkan dari [Forum Sublime](https://forum.sublimetext.com/t/how-to-enable-css-highlighting-in-template-literal-strings/45264/6).