### 1. Apa itu Variabel?

#### Definisi dan Fungsi Variabel

Variabel dalam pemrograman adalah sebuah nama simbolik yang mengacu pada sebuah nilai atau data yang dapat diubah selama eksekusi program. Bayangkan variabel sebagai wadah atau kontainer yang bisa menyimpan informasi, dan informasi ini bisa diubah seiring berjalannya program. Dalam konteks sehari-hari, variabel bisa disamakan dengan sebuah kotak penyimpanan yang bisa diisi dan diambil isinya kapan saja.

#### Mengapa Variabel Penting?

Variabel sangat penting dalam pemrograman karena memungkinkan kita untuk menyimpan dan memanipulasi data. Tanpa variabel, kita akan kesulitan mengelola informasi dalam program, seperti menghitung nilai, menyimpan status aplikasi, atau menangani input dari user.

#### Cara Kerja Variabel

1. **Deklarasi:** Ini adalah langkah di mana kita memberitahukan kepada program bahwa kita ingin membuat variabel. Dalam JavaScript, kita menggunakan kata kunci `var`, `let`, atau `const` untuk deklarasi.
2. **Inisialisasi:** Ini adalah langkah di mana kita memberikan nilai awal kepada variabel. Misalnya, `let usia = 30;` di mana `usia` adalah variabel dan `30` adalah nilai yang diinisialisasi.
3. **Penggunaan:** Setelah dideklarasikan dan diinisialisasi, variabel bisa digunakan dalam operasi atau ekspresi lain dalam program.

#### Contoh Sederhana

Misalkan kita ingin menyimpan nama dan usia seseorang dalam program. Kita bisa menggunakan variabel seperti ini:

```javascript
let nama = "Jajang";
let usia = 30;
console.log(nama); // Output: Jajang
console.log(usia); // Output: 30
```

Dalam contoh di atas, kita membuat dua variabel `nama` dan `usia`, masing-masing menyimpan nilai "Jajang" dan 30. Kemudian kita menampilkan nilai-nilai tersebut menggunakan `console.log`.

#### Tipe Data Variabel

Variabel dalam JavaScript dapat menyimpan berbagai tipe data, termasuk:

- **String:** untuk teks, seperti `"Hello, world!"`.
- **Number:** untuk angka, baik bilangan bulat maupun desimal, seperti `42` atau `3.14`.
- **Boolean:** untuk nilai benar atau salah, seperti `true` atau `false`.
- **Array:** untuk menyimpan kumpulan data dalam satu variabel, seperti `[1, 2, 3, 4]`.
- **Object:** untuk menyimpan data yang lebih kompleks dalam bentuk pasangan kunci-nilai, seperti `{ nama: "Jajang", usia: 30 }`.

#### Contoh Penggunaan Variabel Lain

- **Menghitung luas lingkaran:**

```javascript
let radius = 5;
let area = Math.PI * radius * radius;
console.log(area); // Output: 78.53981633974483
```

Dalam contoh ini, kita menggunakan variabel `radius` untuk menyimpan jari-jari lingkaran dan variabel `area` untuk menyimpan hasil perhitungan luas lingkaran.

- **Mengubah nilai variabel:**

```javascript
let score = 50;
score = 75; // Mengubah nilai score menjadi 75
console.log(score); // Output: 75
```

Di sini, kita mengubah nilai variabel `score` dari 50 menjadi 75.

#### Konsep Variabel dalam Kehidupan Sehari-hari

Contoh variabel seperti sebuah label pada kotak penyimpanan. Misalnya, Kita memiliki kotak dengan label "Pensil Warna". Di dalam kotak ini, Kita bisa menyimpan beragam pensil berwarna. Kita bisa membuka kotak ini kapan saja untuk mengambil atau menambahkan pensil. Jika Kita ingin mengganti label menjadi "Pensil Tulis", Kita bisa mengubah isinya sesuai dengan label baru.

#### Kesimpulan

Variabel adalah elemen dasar dalam pemrograman yang memungkinkan kita menyimpan dan mengelola data secara efisien. Dengan memahami konsep variabel, kita bisa membuat program yang lebih dinamis dan fleksibel. Memahami cara kerja variabel dan bagaimana menggunakannya adalah langkah penting dalam belajar pemrograman, terutama dalam bahasa seperti JavaScript.

[🏠home](../README.md) | [Selanjutnya ⏭](../deklarasi/README.md)
