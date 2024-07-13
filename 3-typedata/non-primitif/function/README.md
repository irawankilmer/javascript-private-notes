# Function di JavaScript

Function adalah blok kode yang dirancang untuk melakukan tugas tertentu. Function memungkinkan Kita untuk menyusun kode menjadi potongan-potongan yang dapat digunakan kembali dan lebih mudah dipelihara. Dalam JavaScript, function adalah objek, yang berarti function dapat disimpan dalam variabel, diteruskan sebagai argumen ke function lain, atau dikembalikan dari function lain.

## Membuat Function

Ada beberapa cara untuk mendefinisikan function di JavaScript:

1. **Function Declaration**

   ```javascript
   function greet(name) {
     return `Hello, ${name}!`;
   }
   console.log(greet("Alice")); // Output: Hello, Alice!
   ```

2. **Function Expression**

   ```javascript
   const greet = function (name) {
     return `Hello, ${name}!`;
   };
   console.log(greet("Bob")); // Output: Hello, Bob!
   ```

3. **Arrow Function**
   Arrow function adalah sintaks singkat untuk mendefinisikan function. Namun, Arrow function memiliki beberapa perbedaan perilaku, terutama terkait dengan konteks `this`.
   ```javascript
   const greet = (name) => `Hello, ${name}!`;
   console.log(greet("Charlie")); // Output: Hello, Charlie!
   ```
   Sebenarnya function akan dibahas pada sesi tersendiri. Disini hanya perkenalan saja.

## Parameter dan Argumen

Function dapat menerima input dalam bentuk parameter. Ketika function dipanggil, nilai yang diteruskan disebut argumen.

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

## Default Parameters

JavaScript mendukung default parameters, yang memungkinkan Kita menetapkan nilai default untuk parameter jika tidak ada argumen yang diteruskan.

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
```

## Rest Parameters

Rest parameters memungkinkan function untuk menerima sejumlah argumen tak terbatas sebagai array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
```

## Function Return Value

Function dapat mengembalikan nilai menggunakan kata kunci `return`. Jika tidak ada nilai yang dikembalikan, function mengembalikan `undefined` secara default.

```javascript
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // Output: 6
```

## Anonymous Functions

Anonymous functions adalah function yang tidak memiliki nama. Anonymous function sering digunakan sebagai argumen untuk function lain.

```javascript
setTimeout(function () {
  console.log("This message is delayed by 2 seconds.");
}, 2000);
```

## Higher-Order Functions

Higher-order functions adalah function yang dapat menerima function lain sebagai argumen atau mengembalikan function sebagai hasil. Ini adalah salah satu fitur kunci dari pemrograman fungsional di JavaScript.

```javascript
function greetUser(greetFunction, name) {
  console.log(greetFunction(name));
}

greetUser((name) => `Hello, ${name}!`, "Alice"); // Output: Hello, Alice!
```

## Immediately Invoked Function Expressions (IIFE)

IIFE adalah function yang didefinisikan dan dipanggil segera setelah didefinisikan. IIFE sering digunakan untuk membuat scope lokal.

```javascript
(function () {
  console.log("This function runs immediately!");
})();
```

## Closures

Closures adalah function yang mengingat lingkungan tempat mereka diciptakan. Closures memungkinkan function untuk memiliki "memori" tentang lingkungan tempat mereka didefinisikan.

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
```

## Callbacks

Callbacks adalah function yang diteruskan sebagai argumen ke function lain dan dipanggil setelah operasi selesai. Callbacks umum digunakan dalam operasi asinkron seperti permintaan HTTP.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 2000);
}

fetchData((message) => {
  console.log(message); // Output: Data fetched
});
```

## Arrow Functions dan `this`

Arrow functions berbeda dengan function biasa dalam hal bagaimana mereka menangani konteks `this`. Arrow functions tidak memiliki konteks `this` sendiri tetapi mewarisi dari lingkungan sekitarnya.

```javascript
const obj = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  },
};

obj.greet(); // Output: Hello, Alice!
```

## Rekursi

Rekursi adalah teknik di mana function memanggil dirinya sendiri untuk menyelesaikan tugas. Rekursi berguna untuk masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
```

## Rangkuman

Functions adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Mereka adalah elemen penting dalam JavaScript yang memungkinkan Kita untuk menulis kode yang modular, terstruktur, dan mudah dipelihara. Memahami berbagai cara untuk mendefinisikan, menggunakan, dan memanipulasi functions, serta konsep-konsep seperti closures dan higher-order functions, adalah kunci untuk menguasai JavaScript.

[⏮Sebelumnya](../array/README.md) | [🏠Home](../README.md) | [Selanjutnya⏭](../date/README.md)
