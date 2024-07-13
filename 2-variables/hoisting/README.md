# Hoisting

Hoisting adalah konsep dalam JavaScript yang sering membingungkan pemula. Namun, memahami hoisting sangat penting karena dapat mempengaruhi cara variabel dan fungsi berperilaku dalam kode Kita. Secara sederhana, hoisting adalah mekanisme di mana deklarasi variabel dan fungsi "diangkat" ke bagian atas konteks eksekusi mereka sebelum kode sebenarnya dijalankan.

## Apa itu Hoisting?

Hoisting adalah tindakan JavaScript secara otomatis memindahkan deklarasi variabel dan fungsi ke bagian atas ruang lingkup mereka (scope). Namun, hanya deklarasi yang dihoist, bukan inisialisasi.

## Hoisting pada Variabel

1. **Var Hoisting:**
   Variabel yang dideklarasikan menggunakan `var` akan dihoist ke bagian atas fungsi atau konteks global. Namun, inisialisasinya tetap berada di tempat semula. Ini berarti variabel `var` akan dihoist dan diinisialisasi dengan `undefined`.

   Contoh:

   ```javascript
   console.log(a); // undefined
   var a = 5;
   console.log(a); // 5
   ```

   Dalam contoh di atas, deklarasi `var a` dihoist ke bagian atas, tetapi inisialisasi `a = 5` tetap berada di tempatnya. Jadi, sebelum inisialisasi, `a` memiliki nilai `undefined`.

2. **Let dan Const Hoisting:**
   Meskipun `let` dan `const` juga dihoist, mereka tidak diinisialisasi sampai eksekusi mencapai baris kode mereka. Ini berarti Kita tidak bisa mengakses `let` atau `const` sebelum deklarasi mereka dalam kode.

   Contoh `let`:

   ```javascript
   console.log(b); // ReferenceError: b is not defined
   let b = 10;
   console.log(b); // 10
   ```

   Contoh `const`:

   ```javascript
   console.log(c); // ReferenceError: c is not defined
   const c = 15;
   console.log(c); // 15
   ```

#### Hoisting pada Fungsi

1. **Deklarasi Fungsi:**
   Deklarasi fungsi dihoist sepenuhnya, artinya baik nama fungsi maupun body fungsi dihoist ke bagian atas ruang lingkup.

   Contoh:

   ```javascript
   greet(); // Output: "Hello, world!"

   function greet() {
     console.log("Hello, world!");
   }
   ```

   Dalam contoh ini, deklarasi fungsi `greet` dihoist ke bagian atas, sehingga kita bisa memanggil fungsi `greet` sebelum deklarasi sebenarnya.

2. **Ekspresi Fungsi:**
   Ekspresi fungsi berperilaku seperti variabel yang dideklarasikan menggunakan `let` atau `const`. Mereka dihoist tetapi tidak diinisialisasi sampai eksekusi mencapai baris kode mereka.

   Contoh:

   ```javascript
   greet(); // TypeError: greet is not a function

   var greet = function () {
     console.log("Hello, world!");
   };
   ```

   Dalam contoh ini, variabel `greet` dihoist, tetapi inisialisasinya tidak dihoist, sehingga `greet` dianggap `undefined` saat dipanggil.

#### Contoh Kasus Hoisting

Berikut adalah contoh bagaimana hoisting dapat mempengaruhi kode Kita:

```javascript
function testHoisting() {
  console.log(foo); // undefined
  var foo = "bar";
  console.log(foo); // 'bar'

  console.log(baz); // ReferenceError: baz is not defined
  let baz = "qux";
  console.log(baz); // 'qux'
}

testHoisting();
```

Dalam contoh di atas:

- `var foo` dihoist dan diinisialisasi dengan `undefined`, jadi tidak ada kesalahan saat memanggil `console.log(foo)` pertama kali.
- `let baz` dihoist tetapi tidak diinisialisasi sampai baris deklarasi tercapai, sehingga memanggil `console.log(baz)` sebelum deklarasi mengakibatkan ReferenceError.

#### Tips Menghindari Masalah Hoisting

- **Gunakan `let` dan `const` secara konsisten** untuk menghindari kebingungan yang disebabkan oleh hoisting variabel `var`.
- **Deklarasikan variabel dan fungsi di bagian atas ruang lingkup mereka** untuk membuat kode lebih mudah dibaca dan dipahami.
- **Selalu inisialisasi variabel pada saat deklarasi** untuk menghindari nilai `undefined` yang tidak terduga.

Dengan memahami hoisting, Kita bisa menghindari banyak bug dan menulis kode yang lebih bersih dan dapat diprediksi. Hoisting mungkin tampak rumit pada awalnya, tetapi dengan latihan, Kita akan terbiasa dan bisa memanfaatkannya dengan baik dalam kode JavaScript Kita.

[⏮ Sebelumnya](../deklarasi/README.md) | [🏠Home](../../README.md) | [Selanjutnya ⏭](../rules/README.md)
