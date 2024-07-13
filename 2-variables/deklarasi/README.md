# Deklarasi Variabel (var, let, const)

Dalam JavaScript, variabel dapat dideklarasikan menggunakan tiga kata kunci: `var`, `let`, dan `const`. Masing-masing memiliki karakteristik dan kegunaannya sendiri. Memahami perbedaan antara ketiga jenis deklarasi ini sangat penting untuk menulis kode yang bersih, efisien, dan bebas bug.

## Deklarasi Menggunakan `var`

`var` adalah cara lama untuk mendeklarasikan variabel dalam JavaScript. Variabel yang dideklarasikan dengan `var` memiliki beberapa karakteristik khusus:

1. **Scope Fungsi:** Variabel yang dideklarasikan dengan `var` memiliki cakupan (scope) fungsi, yang berarti variabel ini hanya dapat diakses di dalam fungsi di mana ia dideklarasikan.

   ```javascript
   function example() {
     var x = 10;
     console.log(x); // 10
   }
   console.log(x); // ReferenceError: x is not defined
   ```

2. **Hoisting:** Variabel `var` di-hoist ke bagian atas fungsi atau konteks eksekusi mereka. Ini berarti Kita dapat menggunakan variabel sebelum mendeklarasikannya, meskipun ini bisa menyebabkan kebingungan.
   ```javascript
   console.log(y); // undefined
   var y = 5;
   ```

#### Deklarasi Menggunakan `let`

`let` diperkenalkan di ECMAScript 2015 (ES6) dan memiliki beberapa keuntungan dibandingkan `var`:

1. **Scope Blok:** Variabel `let` memiliki cakupan blok, yang berarti variabel ini hanya dapat diakses di dalam blok di mana ia dideklarasikan (misalnya, di dalam `{}`).

   ```javascript
   {
     let z = 20;
     console.log(z); // 20
   }
   console.log(z); // ReferenceError: z is not defined
   ```

2. **Tidak di-hoist seperti `var`:** Meskipun `let` juga di-hoist, ia tidak diinisialisasi sampai eksekusi mencapai deklarasi. Ini berarti Kita tidak bisa menggunakan `let` sebelum mendeklarasikannya.
   ```javascript
   console.log(a); // ReferenceError: a is not defined
   let a = 10;
   ```

#### Deklarasi Menggunakan `const`

`const` juga diperkenalkan di ES6 dan digunakan untuk mendeklarasikan variabel yang nilainya tidak akan diubah setelah diinisialisasi:

1. **Scope Blok:** Seperti `let`, variabel `const` memiliki cakupan blok.

   ```javascript
   {
     const b = 30;
     console.log(b); // 30
   }
   console.log(b); // ReferenceError: b is not defined
   ```

2. **Harus Diinisialisasi Saat Deklarasi:** Kita harus memberikan nilai kepada variabel `const` saat mendeklarasikannya. Setelah diinisialisasi, nilai ini tidak dapat diubah.

   ```javascript
   const c = 40;
   c = 50; // TypeError: Assignment to constant variable.
   ```

3. **Immutabilitas:** Sementara `const` membuat referensi terhadap nilai menjadi konstan, ini tidak berarti nilai yang direferensikan juga konstan. Jika Kita menggunakan `const` untuk mendeklarasikan objek atau array, Kita masih bisa mengubah isi objek atau array tersebut.
   ```javascript
   const obj = { name: "Alice" };
   obj.name = "Bob"; // Ini diizinkan
   console.log(obj.name); // "Bob"
   ```

#### Perbandingan `var`, `let`, dan `const`

- **Scope:** `var` memiliki cakupan fungsi, sedangkan `let` dan `const` memiliki cakupan blok.
- **Hoisting:** `var` di-hoist dan diinisialisasi dengan `undefined`, sedangkan `let` dan `const` di-hoist tetapi tidak diinisialisasi.
- **Reassignment:** `var` dan `let` dapat di-assign ulang, tetapi `const` tidak dapat di-assign ulang setelah diinisialisasi.

#### Tips dan Trik

- **Gunakan `let` untuk variabel yang nilainya dapat berubah.** Ini membantu menghindari masalah yang disebabkan oleh hoisting dan scope yang tidak jelas.
- **Gunakan `const` untuk variabel yang nilainya tidak akan berubah.** Ini meningkatkan kejelasan kode dan membantu mencegah kesalahan yang disebabkan oleh reassignment yang tidak disengaja.
- **Hindari menggunakan `var` kecuali Kita benar-benar memerlukan cakupan fungsi.** Penggunaan `var` dapat menyebabkan bug yang sulit dideteksi karena hoisting dan cakupan yang berbeda dari `let` dan `const`.

Dengan memahami perbedaan antara `var`, `let`, dan `const`, Kita bisa menulis kode JavaScript yang lebih aman, efisien, dan mudah dipahami.

[⏮ Sebelumnya](../intro/README.md) | [🏠Home](../README.md) | [Selanjutnya ⏭](../hoisting/README.md)
