# Menghubungkan Termux dengan Github Menggunakan SSH

Pastikan kamu memiliki aplikasi Termux. Bagusnya sih, download Termuxnya dari FDroid. Soalnya, kalau dari Play Store, aplikasi Termuxnya nggak update.

Pertama, install dulu `openssh`:

```bash
pkg install openssh
```

Setelah terinstall, generate SSH dengan perintah: `ssh-keygen`. Kalau ada pertanyaan, tekan Enter aja. Itu pertanyaannya sampai tiga kali.

Kemudian, buka kunci publicnya:

```bash
cd .ssh/
cat id_rsa.pub
```

## Mendaftarkan SSH ke Github

Buka website Github. Lalu, klik foto profil kecil yang ada di ujung kanan atas, lalu klik Settings.

Klik menu `SSH and GPG keys`.

Klik `New SSH key`.

Untuk bagian title, isi terserah aja. Misalnya aja, diisi dengan `SSH di Termux`. Lalu, pada bagian key, masukkan kunci public yang kita dapatkan tadi.

Kalau sudah, klik `Add SSH key`

> Baca juga: <router-link to='/post/hentikan-sikap-pamer-itu'>Hentikan Sikap Pamer Itu</router-link>

## Clone dengan SSH

Misal, kita memiliki repositori `github.com/user/belajar`. Maka, perintah untuk clone-nya adalah:

```bash
git clone git@github.com:user/belajar
```

Kalau kamu hanya ingin clone commit terakhir supaya hemat kuota, tambahkan parameter `--depth 1` sehingga menjadi:

```bash
git clone --depth 1 git@github.com:user/belajar
```

## Menyingkat Perintah Clone di Termux

Kan perintah clone di atas tadi lumayan panjang ya. Nah, misal ingin kita singkat menjadi `github belajar`. Berikut caranya:

Install dulu `micro`:

```bash
pkg install micro
```

Lalu masuk ke folder `bin`:

```bash
cd
cd ..
cd usr/bin/
```

Buat file `github`:

```bash
micro github
```

Isi file itu dengan:

```bash
git clone --depth 1 git@github.com:user/$1
```

Save dengan `Ctrl` `s`, lalu keluar dengan `Ctrl` `q`.

Beri akses superuser pada file `github`:

```bash
chmod +x github
```