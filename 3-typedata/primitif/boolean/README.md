# Boolean

Boolean adalah tipe data primitif dalam JavaScript yang hanya memiliki dua nilai: `true` dan `false`. Nilai boolean sering digunakan dalam pernyataan kondisional dan logika untuk mewakili kebenaran atau kesalahan suatu kondisi.

## Penggunaan Dasar

Nilai boolean biasanya dihasilkan dari operator relasional (`==`, `!=`, `===`, `!==`), operator logika (`&&`, `||`, `!`), dan fungsi yang memeriksa kondisi tertentu seperti `Array.isArray()` atau `Boolean()`.

## Contoh Sederhana

```javascript
let isActive = true;
let isComplete = false;
console.log(isActive); // Output: true
console.log(isComplete); // Output: false
```

## Casting Nilai ke Boolean

JavaScript secara otomatis mengubah tipe data lain ke boolean dalam konteks boolean. Misalnya, pernyataan `if` akan secara implisit mengubah nilai non-boolean menjadi boolean.

```javascript
let name = "Alice";
if (name) {
  console.log("Name is defined"); // Output: Name is defined
}

let age = 0;
if (age) {
  console.log("Age is defined"); // Tidak ada output karena 0 dianggap false
}
```

Fungsi `Boolean()` atau operator ganda `!` dapat digunakan untuk secara eksplisit mengubah nilai menjadi boolean:

```javascript
console.log(Boolean("")); // Output: false
console.log(Boolean(123)); // Output: true
console.log(!!0); // Output: false
console.log(!!"Hello"); // Output: true
```

## Falsy dan Truthy

Dalam JavaScript, beberapa nilai dianggap "falsy", yang berarti mereka diubah menjadi `false` dalam konteks boolean:

- `false`
- `0`
- `-0`
- `0n` (BigInt)
- `""` (string kosong)
- `null`
- `undefined`
- `NaN`

Semua nilai lainnya dianggap "truthy" dan diubah menjadi `true`:

- Objek (`{}`, `[]`)
- String non-kosong (`"abc"`)
- Angka non-nol (`1`, `-1`)
- BigInt non-nol (`1n`, `-1n`)
- Symbol

## Boolean Primitif dan Objek Boolean

Hati-hati saat menggunakan konstruktor `Boolean` dengan `new`, karena ini membuat objek boolean, bukan nilai primitif boolean, yang selalu dianggap `true`.

```javascript
let falseObj = new Boolean(false);
console.log(falseObj); // Output: [Boolean: false]
console.log(typeof falseObj); // Output: object
console.log(falseObj == true); // Output: false
console.log(Boolean(falseObj)); // Output: true
```

Disarankan untuk menggunakan fungsi `Boolean()` atau operator ganda `!` untuk konversi boolean, bukan `new Boolean()`.

Menggunakan boolean dengan cara yang benar sangat penting dalam menulis kode yang jelas dan dapat diandalkan dalam JavaScript【144†source】【145†source】.

[⏮ Sebelumnya](../string/README.md) | [🏠Home](../README.md) | [Selanjutnya ⏭](../null/README.md)
