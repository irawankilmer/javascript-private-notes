# Tipe Data JavaScript

Tipe data adalah jenis nilai yang dapat disimpan dan dimanipulasi dalam sebuah program. JavaScript memiliki berbagai tipe data yang dibagi menjadi dua kategori utama: primitif dan non-primitif. Memahami perbedaan dan penggunaan masing-masing tipe data adalah fundamental untuk menulis kode JavaScript yang efisien dan efektif.

**[Tipe Data Primitif](./primitif/README.md)**

## Tipe Data Non-Primitif

**1. Object**

Objek adalah tipe data kompleks yang digunakan untuk menyimpan koleksi data dan entitas yang lebih kompleks. Objek dapat menyimpan pasangan `key-value` dan memiliki berbagai metode untuk memanipulasi data.

**2. Array**

Array adalah objek khusus yang digunakan untuk menyimpan daftar berurutan dari beberapa nilai. Array memiliki metode bawaan untuk operasi seperti penambahan, penghapusan, dan pencarian elemen.

**3. Function**

Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi dapat disimpan dalam variabel, dilewatkan sebagai argumen ke fungsi lain, dan dikembalikan oleh fungsi lain.

**4. Date**

Tipe data `Date` digunakan untuk bekerja dengan tanggal dan waktu. JavaScript menyediakan banyak metode untuk manipulasi tanggal.

**5. Map dan Set**

`Map` adalah objek yang menyimpan pasangan kunci-nilai di mana kunci dapat berupa tipe data apa pun. `Set` adalah koleksi nilai unik. `WeakMap` dan `WeakSet` adalah versi dari `Map` dan `Set` yang memungkinkan pengumpulan sampah untuk entri yang tidak direferensikan.

## Operator `typeof`

Operator `typeof` digunakan untuk menentukan tipe data dari sebuah nilai. Misalnya, `typeof 42` akan mengembalikan "number" dan `typeof "hello"` akan mengembalikan "string".

## Objek dalam JavaScript

**Built-in Objects**

JavaScript menyediakan banyak objek bawaan seperti `String`, `Number`, `Boolean`, `Math`, `Date`, dll., yang memiliki metode dan properti yang berguna.

**Object Prototype**

Semua objek di JavaScript memiliki properti tersembunyi yang disebut prototype. Prototype adalah objek dari mana objek lain mewarisi metode dan properti.

**Prototypal Inheritance**

Pewarisan prototipe adalah model pewarisan di JavaScript di mana objek dapat mewarisi properti dan metode dari objek lain.

## Informasi Tambahan

**Tips dan Trik**

- Gunakan `const` untuk nilai yang tidak berubah dan `let` untuk variabel yang nilainya dapat diubah.
- Hindari menggunakan `var` karena scoping yang rumit.
- Gunakan tipe data yang tepat untuk memastikan kinerja optimal dan menghindari bug.

**Info Penting**

- Pahami perbedaan antara `null` dan `undefined`.
- Gunakan `===` untuk perbandingan ketat untuk menghindari kesalahan tipe data.

[⏮ Sebelumnya](../2-variables/README.md) | [🏠Home](../README.md) |
