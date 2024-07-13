# Apa Itu Tipe Data Primitif dalam JavaScript?

Tipe data primitif adalah tipe data dasar yang ada dalam bahasa pemrograman JavaScript. Tipe data ini adalah tipe data yang paling sederhana dan tidak memiliki metode atau properti. Sebaliknya, tipe data primitif menyimpan nilai tunggal dan tidak dapat diubah setelah diciptakan, meskipun variabel yang menampung nilai tersebut bisa diubah untuk menampung nilai baru. Dalam JavaScript, ada tujuh tipe data primitif:

1. **[Number](./number/README.md)**

   - Mewakili angka, baik bilangan bulat maupun desimal.

2. **[String](./string/README.md)**

   - Mewakili teks atau karakter.

3. **[Boolean](./boolean/README.md)**

   - Hanya memiliki dua nilai: `true` dan `false`.

4. **[Null](./null/README.md)**

   - Mewakili nilai yang secara eksplisit diatur tidak memiliki nilai.

5. **[Undefined](./undefined/README.md)**

   - Mewakili variabel yang telah dideklarasikan tetapi belum diinisialisasi dengan nilai.

6. **[Symbol](./symbol/README.md)** (diperkenalkan di ECMAScript 6)

   - Mewakili nilai unik dan tidak dapat diubah.

7. **[BigInt](./bigint/README.md)** (diperkenalkan di ECMAScript 2020)
   - Mewakili angka yang sangat besar yang tidak dapat diwakili oleh tipe data `Number`.

## Karakteristik Tipe Data Primitif:

- **Immutability**: Nilai primitif tidak dapat diubah setelah diciptakan. Misalnya, jika Anda memiliki string, Anda tidak dapat mengubah karakternya secara langsung. Sebaliknya, Anda bisa membuat string baru dengan perubahan yang diinginkan.
- **Pas-by-Value**: Ketika Anda menyalin atau menetapkan variabel primitif ke variabel lain, yang disalin adalah nilai sebenarnya, bukan referensi ke nilai tersebut.

## Pentingnya Tipe Data Primitif:

Memahami tipe data primitif sangat penting karena mereka adalah blok pembangun dasar dari semua program JavaScript. Tipe data ini digunakan untuk menyimpan dan memanipulasi informasi dalam berbagai cara. Mengetahui perbedaan antara tipe data primitif dan non-primitif juga membantu dalam menulis kode yang lebih efisien dan bebas bug.

[🏠Home](../README.md) | [Selanjutnya⏭](../non-primitif/README.md)
