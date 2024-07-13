# Array di JavaScript

Array adalah struktur data yang digunakan untuk menyimpan banyak nilai dalam satu variabel. Di JavaScript, array adalah tipe data non-primitif yang memungkinkan kita menyimpan koleksi elemen dalam urutan tertentu. Setiap elemen dalam array memiliki indeks, yang dimulai dari 0.

## Membuat Array

Ada beberapa cara untuk membuat array di JavaScript:

1. **Menggunakan Notasi Array Literal**

   ```javascript
   const numbers = [1, 2, 3, 4, 5];
   const fruits = ["apple", "banana", "cherry"];
   ```

2. **Menggunakan Konstruktor Array**
   ```javascript
   const numbers = new Array(1, 2, 3, 4, 5);
   const fruits = new Array("apple", "banana", "cherry");
   ```

## Mengakses dan Memanipulasi Elemen Array

Kita dapat mengakses elemen dalam array menggunakan indeks mereka. Kita juga bisa memanipulasi elemen-elemen dalam array dengan menambahkan, mengubah, atau menghapus elemen.

- **Mengakses Elemen Array**

  ```javascript
  console.log(fruits[0]); // Output: apple
  console.log(fruits[2]); // Output: cherry
  ```

- **Mengubah Elemen Array**

  ```javascript
  fruits[1] = "blueberry";
  console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
  ```

- **Menambahkan Elemen ke Array**

  ```javascript
  fruits.push("date");
  console.log(fruits); // Output: ["apple", "blueberry", "cherry", "date"]
  ```

- **Menghapus Elemen dari Array**
  ```javascript
  fruits.pop();
  console.log(fruits); // Output: ["apple", "blueberry", "cherry"]
  ```

## Metode Array Umum

JavaScript menyediakan berbagai metode untuk bekerja dengan array, termasuk metode untuk menambah, menghapus, dan memanipulasi elemen-elemen array.

- **`push` dan `pop`**
  Menambah atau menghapus elemen di akhir array.

  ```javascript
  fruits.push("date"); // Menambah elemen di akhir array
  fruits.pop(); // Menghapus elemen terakhir dari array
  ```

- **`unshift` dan `shift`**
  Menambah atau menghapus elemen di awal array.

  ```javascript
  fruits.unshift("apricot"); // Menambah elemen di awal array
  fruits.shift(); // Menghapus elemen pertama dari array
  ```

- **`splice`**
  Menambah, menghapus, atau mengganti elemen di tengah array.

  ```javascript
  fruits.splice(1, 1, "blackberry"); // Menghapus 1 elemen di indeks 1 dan menambah "blackberry"
  console.log(fruits); // Output: ["apple", "blackberry", "cherry"]
  ```

- **`slice`**
  Mengambil sebagian elemen dari array tanpa mengubah array asli.

  ```javascript
  const someFruits = fruits.slice(1, 3);
  console.log(someFruits); // Output: ["blackberry", "cherry"]
  ```

- **`forEach`**
  Menjalankan fungsi untuk setiap elemen dalam array.

  ```javascript
  fruits.forEach((fruit) => console.log(fruit));
  ```

- **`map`**
  Membuat array baru dengan hasil pemanggilan fungsi untuk setiap elemen dalam array.

  ```javascript
  const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
  console.log(upperFruits); // Output: ["APPLE", "BLACKBERRY", "CHERRY"]
  ```

- **`filter`**
  Membuat array baru dengan semua elemen yang memenuhi kondisi dari fungsi yang diberikan.

  ```javascript
  const longFruits = fruits.filter((fruit) => fruit.length > 5);
  console.log(longFruits); // Output: ["blackberry", "cherry"]
  ```

- **`reduce`**
  Menjalankan fungsi reducer untuk setiap elemen dalam array dan menghasilkan satu nilai.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log(sum); // Output: 15
  ```

- **`find` dan `findIndex`**
  Menemukan elemen pertama atau indeks elemen pertama yang memenuhi kondisi dari fungsi yang diberikan.

  ```javascript
  const cherry = fruits.find((fruit) => fruit === "cherry");
  console.log(cherry); // Output: cherry

  const cherryIndex = fruits.findIndex((fruit) => fruit === "cherry");
  console.log(cherryIndex); // Output: 2
  ```

- **`includes`**
  Memeriksa apakah array berisi elemen tertentu.
  ```javascript
  const hasApple = fruits.includes("apple");
  console.log(hasApple); // Output: true
  ```

## Iterasi dengan `for...of`

Selain metode `forEach`, Anda juga dapat menggunakan loop `for...of` untuk iterasi melalui elemen-elemen dalam array.

```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

## Multidimensional Arrays

JavaScript mendukung array multidimensional, yaitu array yang berisi array lainnya.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][1]); // Output: 2
```

## Rangkuman

Array adalah struktur data fundamental dalam JavaScript yang digunakan untuk menyimpan koleksi elemen dalam urutan tertentu. Memahami cara membuat, mengakses, dan memanipulasi array, serta metode array umum yang tersedia, adalah kunci untuk menulis kode JavaScript yang efisien dan efektif.

[⏮Sebelumnya](../object/README.md) | [🏠Home](../README.md) | [Selanjutnya⏭](../function/README.md)
