# BigInt

BigInt adalah tipe data primitif yang relatif baru di JavaScript, diperkenalkan dalam ECMAScript 2020 (ES11). BigInt memungkinkan kita untuk merepresentasikan bilangan bulat dengan presisi arbitrer, yang berarti kita dapat bekerja dengan angka yang lebih besar dari Number.MAX_SAFE_INTEGER (2^53 - 1). Ini sangat berguna untuk aplikasi yang membutuhkan perhitungan numerik yang presisi, seperti kriptografi atau pemrosesan data besar.

## Membuat BigInt

Ada dua cara utama untuk membuat nilai BigInt:

1. **Menggunakan literal BigInt:** Tambahkan huruf `n` di akhir bilangan bulat.

   ```bash
   let bigIntLiteral = 1234567890123456789012345678901234567890n;
   ```

2. **Menggunakan fungsi BigInt():** Berikan bilangan bulat atau string numerik sebagai argumen.
   ```bash
   let bigIntFunction = BigInt("1234567890123456789012345678901234567890");
   ```

## Operasi dengan BigInt

BigInt mendukung operasi matematika dasar seperti penjumlahan, pengurangan, perkalian, pembagian, dan pangkat. Namun, BigInt tidak dapat dicampur langsung dengan tipe Number dalam operasi matematika tanpa eksplisit konversi.

Contoh:

```javascript
let a = 9007199254740991n; // BigInt
let b = 123456789n; // BigInt

// Operasi matematika
let sum = a + b;
let product = a * b;

// Tidak dapat mencampur BigInt dan Number
let num = 10;
// let result = a + num; // Error: Cannot mix BigInt and other types
let result = a + BigInt(num); // Konversi Number ke BigInt
```

## Keterbatasan BigInt

- **Math Object:** Fungsi-fungsi dalam objek Math seperti `Math.max()` atau `Math.sin()` tidak dapat digunakan dengan BigInt.
- **Konversi:** Hati-hati saat mengkonversi BigInt ke Number karena dapat kehilangan presisi.
- **Performa:** Operasi dengan BigInt biasanya lebih lambat dibandingkan dengan Number.

## Kasus Penggunaan BigInt

BigInt sangat berguna dalam skenario yang membutuhkan presisi tinggi dalam operasi numerik seperti:

- **Kriptografi:** Untuk kunci enkripsi besar.
- **Kalkulasi ilmiah:** Yang memerlukan angka dengan presisi sangat tinggi.
- **Pemrosesan data besar:** Yang melibatkan angka yang sangat besar.

## Contoh Penggunaan BigInt dalam Konteks Nyata

### Kriptografi

BigInt digunakan untuk merepresentasikan kunci enkripsi besar.

```bash
let privateKey = 1234567890123456789012345678901234567890n;
let publicKey = 9876543210987654321098765432109876543210n;

// Contoh sederhana operasi kriptografi
let encrypted = (privateKey * publicKey) % BigInt("12345678901234567890123456789012345678901234567890123456789012345678901234567890");
console.log(encrypted);
```

### Perhitungan Ilmiah

BigInt memungkinkan perhitungan dengan presisi tinggi.

```bash
let distanceToAlphaCentauri = 4.367 * Math.pow(10, 16); // Dalam meter
let largeDistance = BigInt(distanceToAlphaCentauri);

let timeTaken = largeDistance / BigInt(300000); // Kecepatan cahaya dalam meter per detik
console.log(timeTaken);
```

## Kesimpulan

BigInt memperluas kemampuan JavaScript untuk menangani angka-angka besar dengan presisi tinggi, mengatasi keterbatasan tipe Number yang ada. Meskipun memiliki beberapa keterbatasan, penggunaannya sangat penting dalam domain yang membutuhkan akurasi numerik ekstrem.

[⏮Sebelumnya](../symbol/README.md) | [🏠Home](../README.md)
