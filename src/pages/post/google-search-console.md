# Yuk Berkenalan dengan Google Search Console

Kegiatan blogging tidak cuma <router-link to='/post/nulis'>menulis</router-link>. Akan tetapi, berkaitan pula dengan mengecek performa dari tulisan-tulisan yang kita tuangkan ke dalam blog kita. Nah, untuk mengatasi hal itu, ada banyak tools yang bisa kita gunakan, baik itu berbayar maupun gratis. Salah satu tools itu adalah Google Search Console.

Google Search Console merupakan tools gratis yang disediakan oleh Google untuk mengecek performa blog yang kita miliki. Performa blog yang dicek itu meliputi berapa kali klik dari Google menuju blog kita, berapa banyak tayangan, kata kunci apa aja yang masuk ke blog kita, dan lain-lain.

![Tampilan dashboard Google Search Console](https://i.postimg.cc/MptpbYzr/image.png)

Di situ terlihat bahwa ada 3 klik yang berasal dari halaman Google menuju ke blogku. Lalu, ada 14 total tayangan yang artinya link menuju ke <router-link to='/post/nulis'>blogku</router-link> sudah muncul sebanyak 14 kali. Lalu, dari 3 dibagi 14 itu, menghasilkan 21,4% yang artinya, dari 100% kemunculan link blogku di Google, hanya 21,4% aja yang mengkliknya.

Kemudian, selain mengecek performa blog, Google Search Console juga memberikan laporan indexing blog kita:

![Indexing blog di Google Search Console](https://i.postimg.cc/wBJbYw3w/image.png)

Dari gambar di atas terlihat bahwa blog ini memiliki 15 halaman yang valid dan 31 halaman yang dikecualikan. Halaman-halaman yang dikecualikan itu biasanya adalah halaman-halaman yang sudah kita sebutkan di dalam sitemap namun belum diindex oleh Google.

Mengapa dikecualikan? Ada 2 alasan sih, yang pertama adalah karena belum diindex aja, dan yang kedua adalah karena halaman yang akan diindex itu belum memenuhi syarat seperti konten yang berkualitas dan konten yang panjang.

Kalau aku lihat-lihat sih, yang dikecualikan itu, yang punyaku itu, adalah halaman-halaman yang nggak sempurna tapi tersebut di sitemap. Misalnya aja halaman-halaman yang kosong. Nah, kenapa kok ada di sitemap? Karena memang kuatur supaya semua file masuk sitemap, nggak peduli ekstensi filenya dan isi filenya seperti apa. Barbar eh.

Fitur yang tak kalah penting adalah upload sitemap:

![Halaman upload sitemap](https://i.postimg.cc/BZw5Nxnb/image.png)

Di halaman ini, kita bisa menyebutkan sitemap blog yang kita miliki. Sehingga, Google akan lebih mudah dalam merayapi blog kita.

Mungkin itu aja sih yang bisa aku ceritakan karena Google Search Console yang aku miliki juga masih baru, jadi belum banyak data yang bisa digali. Mungkin nanti kalau udah mulai rame Google Search Consolenya, aku tambahin lagi deh isi kontennya.

## Cara Membuat Akun Google Search Console

Untuk membuatnya, simpel aja sih. Intinya kamu sudah punya akun gmail. Nah, tinggal googling: Google Search Console, lalu klik login.

Sekarang, untuk menambahkan blog kita ke dalam Google Search Console, klik dropdown di kiri atas, di bawahnya tulisan Google Search Console:

![Dropdown Google Search Console](https://i.postimg.cc/kgPTFxT8/image.png)

Lalu, diklik, maka akan muncul dropdownnya.

![Dropdown di Google Search Console](https://i.postimg.cc/yNQ5PDgH/image.png)

Klik `Tambahkan properti`. Maka, akan muncul dua pilihan verifikasi:

![Pilihan verifikasi Google Search Console](https://i.postimg.cc/fWX232KZ/image.png)

Dipilih yang mana? Terserah aja sih. Kalau kamu ada akses ke pengaturan DNS, maka bisa dipilih yang pertama. Tapi, kalau nggak ada, bisa pakai yang kedua.

Untuk yang pertama, nanti akan diberikan kode TXT yang harus kita pasang ke pengaturan DNS supaya bisa tersambung. Kalau cara yang kedua, verifikasinya hanya berupa menyisipkan kode HTML ke dalam tag head, maupun meletakkan file verifikasi di root website. Jadi, pilih yang mana? Terserah aja sih.

Ketika sudah verifikasi, maka kita bisa menggunakan fitur-fitur yang ada di Google Search Console.

## Menambahkan Link Website ke Google Search Console

Google secara rutin akan merayapi website kita setiap hari berdasarkan sitemap yang telah kita masukkan di Google Search Console. Tapi, terkadang kita ingin index lebih cepat, misalnya karena link tulisan yang ingin diindex itu adalah job blog maupun untuk lomba.

Maka, caranya adalah mengklik inputan panjang yang ada di atas Google Search Console, lalu masukkan linknya.

![Periksa URL di Google Search Console](https://i.postimg.cc/XJ22fqJC/image.png)

Contohnya, aku memasukkan link <https://kisahzen.com/post/framework>. Maka, masukkan link ini ke kolom inputan itu, klik Enter, lalu tunggu sebentar.

![Link tulisan blog belum diindex](https://i.postimg.cc/7PdFdtHT/image.png)

Ternyata link tersebut belum diindex. Maka, klik aja `MINTA PENGINDEKSAN`. Terus, tunggu lagi. Agak lama sih nunggunya.

Kalau sudah muncul tulisan seperti ini, maka pengindeksan berhasil:

![Pengindeksan berhasil](https://i.postimg.cc/021t7T5Z/image.png)