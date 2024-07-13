# Number

Tipe data `number` dalam JavaScript mencakup angka-angka baik itu bilangan bulat (integer) maupun bilangan desimal (floating-point). Semua angka dalam JavaScript, tanpa memandang jenisnya, diimplementasikan menggunakan tipe data floating-point 64-bit sesuai dengan standar IEEE 754. Ini berarti, dalam JavaScript, angka-angka seperti 1, 1.23, -100, dan 3.14 semuanya termasuk dalam kategori `number`.

## Bilangan Bulat dan Desimal

- **Bilangan Bulat (Integer)**: Angka tanpa bagian desimal. Misalnya, 10, -50, 0.
- **Bilangan Desimal (Floating-Point)**: Angka dengan bagian desimal. Misalnya, 3.14, -0.123, 2.71828.

## Representasi dan Pembatasan

- **Rentang Angka**: JavaScript dapat secara aman merepresentasikan bilangan bulat antara -\(2^{53} - 1\) hingga \(2^{53} - 1\) dengan konstanta `Number.MIN_SAFE_INTEGER` dan `Number.MAX_SAFE_INTEGER`【125†source】.
- **Pembulatan dan Ketidakakuratan**: Karena representasi floating-point, angka desimal sering kali tidak akurat. Sebagai contoh, ekspresi `0.1 + 0.2` tidak menghasilkan 0.3, melainkan 0.30000000000000004【125†source】.

## Metode dan Fungsi Penting

JavaScript menyediakan sejumlah metode untuk bekerja dengan tipe data `number`:

1. **toFixed()**

   - Mengembalikan string yang merepresentasikan angka dengan sejumlah titik desimal tetap.
   - Contoh:
     ```javascript
     let num = 19.006;
     console.log(num.toFixed(2)); // "19.01"
     ```

2. **toExponential()**

   - Mengubah angka menjadi string dalam notasi eksponensial.
   - Contoh:
     ```javascript
     let num = 1234;
     console.log(num.toExponential(2)); // "1.23e+3"
     ```

3. **toPrecision()**

   - Mengembalikan string angka dalam notasi eksponensial atau titik tetap dengan sejumlah digit signifikan.
   - Contoh:
     ```javascript
     let num = 1234.56789;
     console.log(num.toPrecision(5)); // "1234.6"
     ```

4. **toString()**
   - Mengubah angka menjadi string dengan basis yang ditentukan (misalnya, biner, heksadesimal).
   - Contoh:
     ```javascript
     let num = 10;
     console.log(num.toString(2)); // "1010"
     ```

## Kesimpulan

Tipe data `number` dalam JavaScript sangat fleksibel tetapi memiliki beberapa keterbatasan yang perlu diperhatikan, terutama dalam aplikasi komersial atau ilmiah di mana presisi sangat penting. Pengembang harus berhati-hati dengan operasi angka desimal dan memahami keterbatasan representasi floating-point untuk menghindari hasil yang tidak diinginkan.

Untuk informasi lebih lanjut, referensi yang digunakan meliputi:

- JavaScript Number Type dari Progress【125†source】
- JavaScript Number Type Tutorial dari JavaScript Tutorial【126†source】

[🏠Home](../README.md) | [Selanjutnya ⏭](../string/README.md)
