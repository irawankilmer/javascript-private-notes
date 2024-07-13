# Symbol

Symbol adalah tipe data primitif baru yang diperkenalkan di ES6 (ECMAScript 2015). Symbol digunakan untuk membuat identifier yang unik dan tidak bisa diubah (immutable). Setiap kali kita membuat Symbol baru, nilainya selalu unik meskipun kita menggunakan deskripsi yang sama. Ini sangat berguna untuk menghindari konflik nama dalam objek dan memungkinkan kita membuat properti yang tidak dapat diakses secara langsung oleh kode lain.

## Membuat Symbol

Untuk membuat Symbol, kita menggunakan fungsi `Symbol()`. Kita bisa memberikan deskripsi opsional untuk simbol tersebut yang membantu identifikasi simbol saat debugging:

```javascript
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");

console.log(symbol1 === symbol2); // false
```

Dalam contoh di atas, meskipun `symbol1` dan `symbol2` memiliki deskripsi yang sama, nilainya tetap unik dan tidak sama.

## Menggunakan Symbol sebagai key Objek

Symbol dapat digunakan sebagai key dalam objek. Hal ini membantu mencegah konflik antara properti dengan nama yang sama:

```bash
const id = Symbol('id');

const user = {
    name: 'John',
    [id]: 123
};

console.log(user[id]); // 123
```

Dengan menggunakan Symbol, kita dapat menambahkan properti ke objek yang tidak akan bertentangan dengan properti lainnya, bahkan jika kita menggunakan nama yang sama di tempat lain.

## Symbol dalam looping

Properti yang menggunakan Symbol sebagai kunci tidak akan muncul dalam looping `for...in`. Ini berarti mereka secara default tersembunyi dari iterasi biasa:

```javascript
const id = Symbol("id");

const user = {
  name: "John",
  age: 30,
  [id]: 123,
};

for (let key in user) {
  console.log(key); // hanya akan mencetak 'name' dan 'age'
}
```

## Metode dan Properti Symbol

JavaScript menyediakan beberapa metode dan properti untuk bekerja dengan Symbol:

- **`Symbol.for(key)`**: Mencari atau membuat Symbol di registry global.
- **`Symbol.keyFor(symbol)`**: Mengembalikan kunci yang terkait dengan Symbol dari registry global.
- **`Symbol.hasInstance`**: Metode yang menentukan jika suatu objek dikenali sebagai instance dari constructor.
- **`Symbol.iterator`**: Metode yang mengembalikan default iterator untuk suatu objek.

Contoh penggunaan metode `Symbol.for()` dan `Symbol.keyFor()`:

```javascript
const sym1 = Symbol.for("key");
const sym2 = Symbol.for("key");

console.log(sym1 === sym2); // true

const key = Symbol.keyFor(sym1);
console.log(key); // 'key'
```

## Well-Known Symbols

`Well-Known` Symbols adalah simbol bawaan yang menyediakan "protokol" untuk operasi JavaScript tertentu. Beberapa `well-known` symbols termasuk `Symbol.iterator`, `Symbol.asyncIterator`, `Symbol.match`, dan lainnya. Mereka memungkinkan kita untuk menyesuaikan perilaku default dari beberapa operasi di JavaScript.

Menggunakan Symbol dapat memberikan cara yang aman dan fleksibel untuk mengelola properti dalam objek dan menghindari konflik nama. Ini adalah fitur yang sangat kuat dalam JavaScript modern, terutama dalam pengembangan library dan framework di mana pengembang perlu memastikan bahwa kode mereka tidak akan berbenturan dengan kode pengguna lainnya.

Untuk informasi lebih lengkap tentang Symbol dan cara penggunaannya.

- [MDN Web Docs tentang Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [Programiz tentang Symbol](https://www.programiz.com/javascript/symbol)

[⏮Sebelumnya](../undefined/README.md) | [🏠Home](../README.md) | [Selanjutnya⏭](../bigint/README.md)
