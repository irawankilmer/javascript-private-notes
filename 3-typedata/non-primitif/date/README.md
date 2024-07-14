# Date Object di JavaScript

Date object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu. Dengan Date object, Kita bisa mendapatkan informasi tentang tanggal dan waktu saat ini, memanipulasi tanggal, dan melakukan operasi terkait waktu. Date object menyediakan banyak method untuk bekerja dengan tanggal dan waktu.

## Membuat Date Object

Ada beberapa cara untuk membuat Date object di JavaScript:

1. **Date Sekarang**

   ```javascript
   const now = new Date();
   console.log(now); // Output: Sat Jul 13 2024 12:30:00 GMT+0000 (Coordinated Universal Time)
   ```

2. **Date dari String**

   ```javascript
   const dateFromString = new Date("2024-07-13");
   console.log(dateFromString); // Output: Sat Jul 13 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
   ```

3. **Date dari Komponen (Tahun, Bulan, Hari, Jam, Menit, Detik, Milidetik)**

   ```javascript
   const dateFromComponents = new Date(2024, 6, 13, 12, 30, 0);
   console.log(dateFromComponents); // Output: Sat Jul 13 2024 12:30:00 GMT+0000 (Coordinated Universal Time)
   ```

4. **Date dari Timestamp**
   ```javascript
   const dateFromTimestamp = new Date(1692551400000);
   console.log(dateFromTimestamp); // Output: Sat Jul 13 2024 12:30:00 GMT+0000 (Coordinated Universal Time)
   ```

## Method Umum pada Date Object

1. **Mengambil Informasi Tanggal dan Waktu**

   ```javascript
   const date = new Date();
   console.log(date.getFullYear()); // Output: 2024
   console.log(date.getMonth()); // Output: 6 (Bulan di JavaScript diindeks dari 0)
   console.log(date.getDate()); // Output: 13
   console.log(date.getHours()); // Output: 12
   console.log(date.getMinutes()); // Output: 30
   console.log(date.getSeconds()); // Output: 0
   console.log(date.getMilliseconds()); // Output: 0
   ```

2. **Mengatur Tanggal dan Waktu**

   ```javascript
   const date = new Date();
   date.setFullYear(2025);
   date.setMonth(0); // Januari
   date.setDate(1);
   date.setHours(0);
   date.setMinutes(0);
   date.setSeconds(0);
   console.log(date); // Output: Wed Jan 01 2025 00:00:00 GMT+0000 (Coordinated Universal Time)
   ```

3. **Mengonversi ke String**
   ```javascript
   const date = new Date();
   console.log(date.toDateString()); // Output: Sat Jul 13 2024
   console.log(date.toTimeString()); // Output: 12:30:00 GMT+0000 (Coordinated Universal Time)
   console.log(date.toISOString()); // Output: 2024-07-13T12:30:00.000Z
   console.log(date.toUTCString()); // Output: Sat, 13 Jul 2024 12:30:00 GMT
   ```

## Operasi dengan Date Object

1. **Menambahkan Hari ke Tanggal**

   ```javascript
   const date = new Date();
   date.setDate(date.getDate() + 5);
   console.log(date); // Output: Thu Jul 18 2024 12:30:00 GMT+0000 (Coordinated Universal Time)
   ```

2. **Menghitung Selisih Tanggal**
   ```javascript
   const startDate = new Date("2024-07-01");
   const endDate = new Date("2024-07-13");
   const diffTime = Math.abs(endDate - startDate);
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   console.log(diffDays); // Output: 12
   ```

## Format Tanggal dan Waktu

JavaScript tidak memiliki format tanggal dan waktu built-in yang sangat kuat seperti beberapa bahasa lain. Namun, Kita dapat menggunakan library seperti `moment.js` atau `date-fns` untuk memformat tanggal dengan lebih mudah dan fleksibel.

1. **Moment.js**

   ```javascript
   // Harus mengimpor moment.js terlebih dahulu
   const moment = require("moment");
   const date = moment();
   console.log(date.format("YYYY-MM-DD")); // Output: 2024-07-13
   ```

2. **Date-fns**
   ```javascript
   // Harus mengimpor date-fns terlebih dahulu
   const { format } = require("date-fns");
   const date = new Date();
   console.log(format(date, "yyyy-MM-dd")); // Output: 2024-07-13
   ```

## Tips dan Trik

1. **Perhatikan Zona Waktu**
   Semua Date object di JavaScript didasarkan pada waktu UTC, tetapi method seperti `getHours`, `getMinutes`, dll. mengembalikan waktu lokal. Gunakan `toISOString` untuk mendapatkan representasi waktu UTC.

2. **Gunakan Library untuk Format Tanggal**
   Untuk kebutuhan format yang lebih kompleks atau internasionalisasi, pertimbangkan menggunakan library seperti `moment.js` atau `date-fns`.

3. **Hati-Hati dengan Bulan**
   Bulan di JavaScript diindeks dari 0 (Januari) hingga 11 (Desember), jadi pastikan untuk menyesuaikan saat bekerja dengan bulan.

## Rangkuman

Date object di JavaScript adalah alat yang kuat untuk bekerja dengan tanggal dan waktu. Dengan memahami berbagai method dan properti yang tersedia, Kita dapat dengan mudah mengelola operasi terkait waktu dalam aplikasi Kita. Selain itu, menggunakan library tambahan dapat membantu menyederhanakan tugas-tugas yang lebih kompleks seperti format tanggal dan perhitungan zona waktu.

[⏮Sebelumnya](../function/README.md) | [🏠Home](../README.md) | [Selanjutnya⏭](../mapset/README.md)
