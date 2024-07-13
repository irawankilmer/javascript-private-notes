# Null

Dalam JavaScript, `null` adalah nilai khusus yang menunjukkan bahwa sebuah variabel tidak memiliki nilai. Ini sering digunakan untuk menunjukkan bahwa sebuah variabel yang seharusnya mengacu pada objek, tidak memiliki objek yang dialokasikan kepadanya saat ini.

```javascript
let example = null;
console.log(example); // Output: null
```

Pada contoh di atas, variabel `example` diberikan nilai `null`, yang menunjukkan bahwa variabel tersebut kosong atau tidak memiliki nilai objek apa pun saat ini.

## Perbedaan antara `null` dan `undefined`

Meskipun `null` dan `undefined` sering digunakan untuk menunjukkan ketiadaan nilai, keduanya memiliki perbedaan penting:

- `undefined`: Menunjukkan bahwa sebuah variabel telah dideklarasikan tetapi belum diberi nilai apa pun.
- `null`: Digunakan untuk menandakan bahwa sebuah variabel yang mengacu pada objek saat ini tidak mengacu pada objek mana pun.

```javascript
let a;
console.log(a); // Output: undefined

let b = null;
console.log(b); // Output: null
```

## Null sebagai Objek

Salah satu aspek yang membingungkan tentang `null` adalah ketika menggunakan operator `typeof` pada `null`, hasilnya adalah `"object"`. Ini adalah bug dalam JavaScript yang diakui oleh penciptanya, dan tidak diubah untuk mempertahankan kompatibilitas mundur.

```javascript
console.log(typeof null); // Output: "object"
```

## Penggunaan Null

`null` sering digunakan dalam konteks di mana Kita ingin mengosongkan referensi ke objek atau menunjukkan bahwa variabel belum berisi data valid. Misalnya, ketika Kita membersihkan memori atau me-reset variabel.

```javascript
let user = { name: "John" };

// Menghapus referensi ke objek
user = null;
```

## Membandingkan Null

Dalam perbandingan, `null` bersifat khusus:

- `==` dengan `null` akan bernilai `true` jika dibandingkan dengan `undefined`.
- `===` dengan `null` hanya akan bernilai `true` jika dibandingkan dengan `null`.

```javascript
console.log(null == undefined); // Output: true
console.log(null === undefined); // Output: false
```

## Nilai Falsy

`null` adalah salah satu dari beberapa nilai yang dianggap "falsy" dalam konteks boolean, yang berarti ia akan dievaluasi sebagai `false` dalam kondisi tertentu.

```javascript
if (!null) {
  console.log("null is falsy"); // Output: "null is falsy"
}
```

## Default Parameter

Dalam JavaScript, jika Kita mengatur parameter fungsi dengan nilai default dan memanggil fungsi tersebut dengan `undefined`, nilai default akan digunakan. Namun, jika Kita memanggil fungsi dengan `null`, nilai `null` akan diteruskan ke fungsi.

```javascript
function exampleFunction(param = 5) {
  console.log(param);
}

exampleFunction(undefined); // Output: 5
exampleFunction(null); // Output: null
```

[⏮ Sebelumnya](../boolean/README.md) | [🏠Home](../README.md) | [Selanjutnya ⏭](../undefined/README.md)
