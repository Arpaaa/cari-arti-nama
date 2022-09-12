# cari-arti-nama
cariartinama.com web scraper

## install
```bash
npm install cari-arti-nama
```

### Mencari arti nama berikut penggunaanya :
```js
const cariArtiNama = require("cari-arti-nama");

// contoh: abdul egi
cariArtiNama("abdul egi").then((res) => {
   console.log(res);
});
```
### Run in CLI
```bash
node test.js
```

### hasil
```js
[
  {
    nama: 'Egi',
    kelamin: 'Laki-laki',
    asal: 'Sejarah',
    arti_nama: 'Nama Arab: bentuk pendek dari Abdullah'
  },
  {                                                                        nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Sansekerta',
    arti_nama: 'Penolong'                                                },
  {
    nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Arab',
    arti_nama: 'Pelayan'
  },
  {
    nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Sansekerta',
    arti_nama: 'Penolong'
  },
  {
    nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Arab',
    arti_nama: 'Hamba ALLAH'
  },
  {
    nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Arab',
    arti_nama: 'Hamba'
  },
  {
    nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Indonesia',
    arti_nama: 'Hamba ALLAH'
  },
  {
    nama: 'Abdul',
    kelamin: 'Laki-laki',
    asal: 'Indonesia',
    arti_nama: 'Lucu'
  }
]
```

#### Author : ArpaLuthfy
