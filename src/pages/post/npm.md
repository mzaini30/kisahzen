# Menggunakan NPM Package di Browser

Pengembangan frontend website saat ini yang populer adalah menggunakan tools-tools frontend seperti Svelte, React, dan Vue. Namun, untuk website-website lawas yang belum mengenal framework-framework JavaScript itu, apakah harus pindah ke framework JavaScript?

Tentunya akan menghabiskan banyak waktu dan biaya.

Apa sih alasan menggunakan framework-framewok JavaScript itu? Salah satu alasannya adalah mudahnya menggunakan package-package JavaScript yang sudah tersedia di NPM. Ibaratnya itu seperti mudahnya menggunakan WordPress karena sudah tersedia banyak plugin.

Contohnya aja package `is-even`.

Package `is-even` memudahkan kita untuk melihat apakah bilangan itu genap atau tidak. Kalau genap, maka akan menghasilkan `true`, sedangkan kalau tidak, hasilnya adalah `false`.

Oh iya, kalau kita menggunakan package `is-even`, cara pakainya seperti ini (Contohnya pakai Svelte):

```html
<script>
	import isEven from 'is-even'

	let angka = 30
	let apakahAngkaGenap = isEven(angka)
</script>

<p>{{ angka }}</p>
<p>{{ apakahAngkaGenap }}</p>
```

Karena Svelte adalah salah satu dari sekian banyak framework JavaScript, maka dia bisa melakukannya. Lalu, bagaimana jika kita hanya menggunakan HTML, CSS, JS biasa?

Akhirnya, aku membuat tools bernama `bumi`.

Jadi, `bumi` ini akan mengkonversi package-package NPM menjadi UMD yang bisa digunakan di browser.

Langsung aja ya kita install `bumi` dengan perintah: `npm i -g bumi`

Nah sekarang misalnya kita ingin menggunakan perintah `is-even` tadi di browser. Pertama, aku siapkan dulu foldernya. Lalu, di folder itu, aku jalankan: `npm i is-even`. Maka, secara otomatis, dia akan menginstall `is-even`.

Lalu, aku buat file `cekGenap.js` yang berisi:

```javascript
import isEven from 'is-even'

export default function(angka){
	return isEven(angka)
}
```

Lalu, untuk mengkonversinya menjadi script buat browser, cukup jalankan perintah:

```bash
bumi cekGenap.js
```

Maka, akan terbentuk file `cekGenap.min.js` yang berisi:

```javascript
// Nama variabel: cekGenap
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cekGenap=e()}(this,function(){"use strict";function t(r){return!!r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r)}var n=function(r){return null!=r&&(t(r)||"function"==typeof(e=r).readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))||!!r._isBuffer);var e},o=Object.prototype.toString,a=function(r){if(void 0===r)return"undefined";if(null===r)return"null";if(!0===r||!1===r||r instanceof Boolean)return"boolean";if("string"==typeof r||r instanceof String)return"string";if("number"==typeof r||r instanceof Number)return"number";if("function"==typeof r||r instanceof Function)return"function";if(void 0!==Array.isArray&&Array.isArray(r))return"array";if(r instanceof RegExp)return"regexp";if(r instanceof Date)return"date";var e=o.call(r);return"[object RegExp]"===e?"regexp":"[object Date]"===e?"date":"[object Arguments]"===e?"arguments":"[object Error]"===e?"error":n(r)?"buffer":"[object Set]"===e?"set":"[object WeakSet]"===e?"weakset":"[object Map]"===e?"map":"[object WeakMap]"===e?"weakmap":"[object Symbol]"===e?"symbol":"[object Int8Array]"===e?"int8array":"[object Uint8Array]"===e?"uint8array":"[object Uint8ClampedArray]"===e?"uint8clampedarray":"[object Int16Array]"===e?"int16array":"[object Uint16Array]"===e?"uint16array":"[object Int32Array]"===e?"int32array":"[object Uint32Array]"===e?"uint32array":"[object Float32Array]"===e?"float32array":"[object Float64Array]"===e?"float64array":"object"},e=function(r){var e=a(r);if("string"===e){if(!r.trim())return!1}else if("number"!==e)return!1;return 0<=r-r+1},i=function(r){if(!e(r))throw new TypeError("is-odd expects a number.");if(Number(r)!==Math.floor(r))throw new RangeError("is-odd expects an integer.");return!!(1&~~r)};return function(r){return!i(r)}});
```

Nah, sekarang, kita coba deh di browser. Pasti bisa itu.

![Hasil bumi](https://i.postimg.cc/NQXdvCpy/hasil-bumi.png)

Mudah kan cara menggunakannya? Kalau masih bingung, bisa komen di bawah deh.