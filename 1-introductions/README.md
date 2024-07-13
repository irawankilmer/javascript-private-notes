# Introductions

## Apa Itu JavaScript?

JavaScript adalah bahasa pemrograman yang ringan, ditafsirkan (interpreted), atau just-in-time compiled yang dikenal luas dan digunakan untuk pengembangan web. Diciptakan oleh Brendan Eich pada tahun 1995 saat bekerja di Netscape, JavaScript adalah salah satu teknologi inti dari World Wide Web, bersama dengan HTML dan CSS. Hampir semua situs web modern menggunakan JavaScript, dan ini didukung oleh semua browser utama tanpa perlu plugin tambahan.

#### Fungsi Utama JavaScript

JavaScript memiliki beberapa fungsi utama dalam pengembangan web:

1. **Interaktivitas:** JavaScript memungkinkan pengembang untuk membuat halaman web yang interaktif. Contohnya termasuk form validation, interactive maps, animasi, dan efek visual.
2. **Manipulasi DOM (Document Object Model):** JavaScript dapat digunakan untuk mengubah struktur, style, dan konten dari halaman web setelah halaman tersebut dimuat, membuatnya dinamis dan responsif terhadap tindakan user.
3. **Komunikasi Asinkron:** JavaScript memungkinkan komunikasi dengan server web tanpa perlu memuat ulang halaman sepenuhnya. Ini bisa dilakukan melalui AJAX (Asynchronous JavaScript and XML), yang digunakan untuk membuat aplikasi web lebih cepat dan lebih responsif.
4. **Pengembangan Aplikasi Web Modern:** Dengan munculnya framework dan library seperti React, Angular, dan Vue.js, JavaScript telah menjadi sangat penting dalam pengembangan aplikasi web front-end yang modern dan kompleks.

#### Execution Environment

JavaScript pada awalnya dirancang untuk berjalan di dalam browser web. Namun, dengan munculnya Node.js, JavaScript kini dapat dijalankan di server, memungkinkan developer untuk menulis kode server-side dengan JavaScript.

#### Syntax and Paradigms

JavaScript adalah bahasa yang multi-paradigma, mendukung gaya pemrograman fungsional, imperatif, dan berbasis objek. Ini memberikan fleksibilitas yang besar kepada developer untuk memilih gaya yang paling cocok untuk kebutuhan proyek. Beberapa fitur utama dari sintaks JavaScript adalah:

- **Variabel:** Dapat dideklarasikan menggunakan `var`, `let`, atau `const`.
- **Fungsi:** Dapat didefinisikan dengan deklarasi fungsi tradisional atau menggunakan ekspresi fungsi panah (arrow functions).
- **Objek:** Struktur data yang kompleks dapat dibuat menggunakan objek dan array.
- **Control Flow:** Menggunakan pernyataan seperti `if`, `for`, `while`, dan `switch`.

#### Contoh Kode Sederhana

Berikut adalah contoh sederhana dari kode JavaScript yang menampilkan pesan ke konsol dan menampilkan alert:

```javascript
// Menampilkan pesan di konsol
console.log("Hello, World!");

// Menampilkan alert ke pengguna
alert("Hello, World!");
```

JavaScript telah berkembang pesat sejak awal kemunculannya, menjadi salah satu bahasa pemrograman paling populer dan banyak digunakan di dunia, baik untuk pengembangan web front-end maupun back-end.

## Sejarah JavaScript

JavaScript pertama kali diciptakan oleh Bapak Brendan Eich pada bulan September 1995 saat bekerja di Netscape Communications Corporation. Pada saat itu, Netscape adalah salah satu pemimpin dalam perkembangan browser web dengan produk utamanya, Netscape Navigator.

#### Kebutuhan dan Tujuan

Pada awalnya, ada kebutuhan untuk bahasa scripting yang mudah digunakan yang dapat diintegrasikan ke dalam browser web dan memungkinkan developer untuk membuat halaman web lebih dinamis dan interaktif. Bahasa ini harus:

- **Mudah dipelajari dan digunakan**: Sehingga pemula sekalipun bisa menggunakannya tanpa memerlukan latar belakang pemrograman yang kuat.
- **Dapat berinteraksi dengan HTML**: Untuk mengubah konten dan gaya dari halaman web.
- **Cepat**: Untuk mengeksekusi dan memanipulasi elemen di halaman web.

#### Penciptaan dan Perkembangan Awal

Brendan Eich berhasil membuat prototype bahasa baru dalam waktu hanya 10 hari. Bahasa ini awalnya diberi nama "Mocha", kemudian berganti menjadi "LiveScript", dan akhirnya dinamai "JavaScript" untuk memanfaatkan popularitas bahasa pemrograman Java yang sedang naik daun pada saat itu.

Pada Desember 1995, JavaScript pertama kali dirilis dengan Netscape Navigator 2.0. Pada saat yang sama, Microsoft merilis versi mereka sendiri dari JavaScript yang disebut "JScript" sebagai bagian dari Internet Explorer 3.0 pada bulan Agustus 1996. Ketika kedua versi bahasa ini berkembang secara bersamaan, perbedaan implementasi mulai muncul, yang menyebabkan ketidakcocokan antara browser.

#### Standarisasi

Untuk mengatasi ketidakcocokan ini, Netscape mengirim JavaScript ke European Computer Manufacturers Association (ECMA) untuk standarisasi. Proses ini menghasilkan standar bahasa baru yang disebut ECMAScript. Edisi pertama ECMAScript dirilis pada tahun 1997, yang kemudian diikuti oleh pembaruan reguler yang menambah fitur dan menyempurnakan bahasa.

#### Edisi Penting ECMAScript:

- **ECMAScript 3 (1999)**: Menambahkan banyak fitur baru yang signifikan, seperti regex, try/catch, dan banyak lagi.
- **ECMAScript 5 (2009)**: Memperkenalkan fitur seperti strict mode, JSON, dan peningkatan dalam manipulasi properti objek.
- **ECMAScript 6 (2015)**: Juga dikenal sebagai ES6 atau ES2015, ini adalah salah satu pembaruan terbesar yang memperkenalkan kelas, modul, arrow functions, template literals, let dan const, dan banyak fitur lainnya.
  Pada poin berikutnya akan dibahas lebih lengkap.

#### Modern JavaScript

JavaScript terus berkembang dengan komunitas yang sangat aktif dan pembaruan tahunan melalui spesifikasi ECMAScript. Framework dan library modern seperti React, Angular, dan Vue.js telah memperluas penggunaan JavaScript dalam pengembangan web front-end, sementara Node.js telah membawa JavaScript ke ranah server-side, memungkinkan developer untuk menggunakan JavaScript untuk seluruh stack pengembangan.

## Versi JavaScript

Seiring dengan perkembangan teknologi dan kebutuhan yang terus berubah, JavaScript juga mengalami berbagai pembaruan dan peningkatan fitur. Berikut adalah beberapa versi utama JavaScript yang penting untuk diketahui:

#### ECMAScript 1 (ES1) - 1997

Versi pertama dari ECMAScript, dikenal juga sebagai ES1, adalah standar awal yang mendefinisikan dasar-dasar JavaScript. Standar ini mencakup sintaks dasar, tipe data, dan beberapa fungsi bawaan seperti `Math` dan `Date`.

#### ECMAScript 2 (ES2) - 1998

ES2 adalah pembaruan minor yang terutama berfokus pada kesesuaian dengan spesifikasi internasional ISO/IEC 16262.

#### ECMAScript 3 (ES3) - 1999

ES3 adalah pembaruan besar yang menambahkan banyak fitur baru dan memperluas kemampuan bahasa. Beberapa fitur penting yang diperkenalkan dalam ES3 meliputi:

- Regular Expressions (RegExp)
- Exception handling (`try...catch`)
- Object manipulation improvements (metode `Object` baru)
- Array manipulation enhancements

#### ECMAScript 4 (ES4)

ES4 adalah versi yang sangat ambisius dengan banyak perubahan besar yang diusulkan, namun akhirnya tidak pernah dirilis secara resmi karena perbedaan pendapat di dalam komite standar. Sebagian besar fitur yang diusulkan kemudian diintegrasikan ke dalam versi ECMAScript berikutnya.

#### ECMAScript 5 (ES5) - 2009

ES5 adalah versi penting yang memperkenalkan banyak fitur baru dan perbaikan, seperti:

- Strict Mode (`"use strict"`) untuk membantu developer menulis kode yang lebih aman dan mudah didebug.
- JSON parsing dan serializing (`JSON.parse` dan `JSON.stringify`)
- Metode baru untuk manipulasi array (`forEach`, `map`, `filter`, `reduce`, dll.)
- Properti getter dan setter
- Object property descriptors dan metode seperti `Object.create`, `Object.defineProperty`, dan `Object.keys`.

#### ECMAScript 6 (ES6/ES2015) - 2015

ES6, juga dikenal sebagai ECMAScript 2015, adalah salah satu pembaruan terbesar dan paling signifikan dalam sejarah JavaScript. ES6 memperkenalkan banyak fitur baru yang membuat JavaScript lebih powerful dan fleksibel. Beberapa fitur penting meliputi:

- `let` dan `const` untuk deklarasi variabel dengan cakupan blok (block scope)
- Arrow functions (`=>`)
- Template literals
- Destructuring assignment
- Default parameters dan rest/spread operator
- Kelas (`class`) dan modul (`import` dan `export`)
- Promises untuk penanganan operasi asinkron
- Generators dan iterators

#### ECMAScript 7 (ES2016) - 2016

ES7 adalah pembaruan yang lebih kecil tetapi tetap penting. Dua fitur utama dari ES7 adalah:

- Operator eksponensial (`**`)
- `Array.prototype.includes` untuk memeriksa apakah sebuah array berisi elemen tertentu

#### ECMAScript 8 (ES2017) - 2017

ES8 memperkenalkan beberapa fitur baru yang berguna, termasuk:

- `async`/`await` untuk penanganan operasi asinkron yang lebih sederhana dan lebih intuitif
- Object.entries dan Object.values
- String padding (`padStart` dan `padEnd`)
- Shared memory dan atomics untuk penanganan data paralel

#### ECMAScript 9 (ES2018) - 2018

ES9 menambahkan beberapa fitur baru seperti:

- Rest/spread properties untuk objek
- Asynchronous iteration (`for await...of`)
- Promise.finally
- Regular expression improvements (lookbehind assertions, named capture groups)

#### ECMAScript 10 (ES2019) - 2019

ES10 memperkenalkan fitur-fitur seperti:

- `Array.prototype.flat` dan `Array.prototype.flatMap`
- Optional catch binding
- `Object.fromEntries`
- String trimming methods (`trimStart` dan `trimEnd`)

#### ECMAScript 11 (ES2020) - 2020

ES11 menambahkan beberapa fitur baru termasuk:

- BigInt untuk representasi angka yang sangat besar
- Nullish coalescing operator (`??`)
- Optional chaining (`?.`)
- Dynamic import (`import()`)
- GlobalThis
- Promise.allSettled

#### ECMAScript 12 (ES2021) - 2021

ES12 memperkenalkan beberapa fitur tambahan seperti:

- Logical assignment operators (`&&=`, `||=`, `??=`)
- Numeric separators untuk meningkatkan keterbacaan angka besar
- String.prototype.replaceAll
- WeakRefs dan FinalizationRegistry

#### ECMAScript 13 (ES2022) - 2022

`ES13` memperkenalkan beberapa fitur penting seperti `top-level await` yang memungkinkan penggunaan `await` di tingkat atas `modul`, `class fields` untuk deklarasi properti publik dan privat, serta peningkatan pada `regex match expression`​.

#### ECMAScript 14 (ES2023) - 2023

Saat ini, `ES14` sedang dalam tahap proposal dan evaluasi oleh komunitas JavaScript. Pembaruan lebih lanjut akan terus memperkaya bahasa ini dengan fitur-fitur baru yang semakin memudahkan pengembangan aplikasi.

## Cara Menjalankan JavaScript

JavaScript dapat dijalankan dalam berbagai lingkungan, baik di sisi klien (client-side) maupun di sisi server (server-side). Berikut adalah beberapa cara umum untuk menjalankan JavaScript:

### 1. Menjalankan JavaScript di Browser

#### a. Dalam HTML File

Cara paling umum untuk menjalankan JavaScript adalah dengan menyematkannya dalam file HTML. Kita bisa menulis JavaScript langsung di dalam tag `<script>` atau menghubungkan file eksternal .js menggunakan atribut `src`.

**Contoh di dalam HTML file:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <script>
      console.log("Hello, World!");
    </script>
  </body>
</html>
```

**Contoh dengan file eksternal:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Example</title>
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

**File `script.js`:**

```javascript
console.log("Hello, World!");
```

#### b. Browser Console

Semua browser modern memiliki console JavaScript yang dapat diakses untuk menulis dan menjalankan JavaScript langsung.

1. Buka browser (misalnya Chrome).
2. Tekan `F12` atau `Ctrl+Shift+I` untuk membuka Developer Tools.
3. Pilih tab "Console".
4. Tulis kode JavaScript dan tekan `Enter`.

**Contoh:**

```javascript
console.log("Hello from the Console!");
```

### 2. Menjalankan JavaScript di Server

Dengan munculnya Node.js, JavaScript bisa dijalankan di sisi server, memungkinkan pengembangan aplikasi back-end menggunakan JavaScript.

#### a. Menggunakan Node.js

Node.js adalah lingkungan runtime JavaScript yang memungkinkan Kita menjalankan JavaScript di luar browser.

1. **Install Node.js:**

   - Download dan install dari [Node.js](https://nodejs.org/).

2. **Menulis dan Menjalankan Script JavaScript:**
   - Buat file dengan ekstensi `.js` (misalnya `app.js`).
   - Tulis kode JavaScript di dalamnya.

**Contoh `app.js`:**

```javascript
console.log("Hello, World from Node.js!");
```

3. **Jalankan Script:**
   - Buka terminal atau command prompt.
   - Navigasi ke direktori tempat file `app.js` disimpan.
   - Jalankan perintah:
     ```bash
     node app.js
     ```

#### b. Menggunakan Framework dan Library

Node.js memiliki banyak framework dan library yang dapat membantu Anda membangun aplikasi server-side, seperti Express.js.

**Contoh aplikasi sederhana dengan Express.js:**

1. **Install Express.js:**

   ```bash
   npm install express
   ```

2. **Buat file `server.js`:**

   ```javascript
   const express = require("express");
   const app = express();
   const port = 3000;

   app.get("/", (req, res) => {
     res.send("Hello, World from Express!");
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

3. **Jalankan Server:**
   ```bash
   node server.js
   ```

### 3. Menjalankan JavaScript di Editor atau IDE

Ada berbagai editor dan IDE yang mendukung JavaScript, seperti Visual Studio Code, Sublime Text, atau WebStorm. Alat-alat ini sering memiliki terminal terintegrasi yang memungkinkan Kita menjalankan Node.js langsung dari editor.
