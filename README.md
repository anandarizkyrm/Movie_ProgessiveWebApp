# WhatMovie

## Deskripsi

WhatMovie adalah sebuah website yang menyediakan informasi tentang semua film yang pernah atau akan dirilis. Kamu bisa mencari film kesukaan mu dengan menuliskan nama film dibagian `search`, kamu juga bisa mencari film berdasarkan `kategori`, `trending`, dan lain-lain. Kamu juga bisa melihat detail informasi dari setiap film, beberapa informasi yang terdapat di dalamnya seperti rating, tanggal rilis, overview, dan juga vidio trailer.

## Teknologi

Website ini dibangun menggunakan beberapa teknologi di dalamnya, antara lain:

- [Next.js](https://nextjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://github.com/axios/axios)

## API

Website ini menggunakan API dari [themoviedb.org](https://www.themoviedb.org/documentation/api), dan pastinya membutuhkan `api-key` agar API pada website ini bisa berjalan. Kamu bisa mendaftar terlebih dahulu di [themoviedb.org](https://www.themoviedb.org/documentation/api) untuk mendapatkan `api-key`. Setelah mendapat api key, kamu bisa memasukan `api-key` tersebut di `env`

```env
NEXT_PUBLIC_KEY="api_key=<your api_key>&language=en-US"
# <your api_key> diganti dengan api-key milik kamu
```

## Development

Jika kamu ingin mencoba untuk melakukan proses development, pastikan perangkat kamu telah terinstal [nodejs](https://nodejs.org/en/).

Kamu bisa mendownload repository ini dengan cara klik `Code` dibagian atas, lalu pilih `Download ZIP` atau jika kamu ingin melakukan clone repository ini bisa dengan cara

```bash
git clone https://github.com/fajarhidayatt/whatmovie.git
```

Setalah itu lakukan instalasi semua package/dependencies yang terdapat pada project ini

```bash
npm install
```

Lalu jalankan server development nya

```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di dalam browser yang kamu gunakan untuk melihat hasilnya.

## Demo

Kamu bisa melihat demo website ini di [jarh-whatmovie.vercel.app](https://jarh-whatmovie.vercel.app)
