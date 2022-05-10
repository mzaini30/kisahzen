# Kumpulan Sintaks CSS

## Line Clamp

Misalnya aku ingin memotong <router-link to='/post/buku'>teks</router-link>, maksimal 3 baris, sisa teksnya menjadi titik-titik:

```css
p {
	display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```