# Object di JavaScript

Objek adalah salah satu tipe data non-primitif paling mendasar di JavaScript yang digunakan untuk menyimpan koleksi data dan lebih kompleks. Objek terdiri dari properti, di mana setiap properti adalah pasangan kunci (key) dan nilai (value). Nilai dari properti ini bisa berupa tipe data primitif (number, string, boolean, dll.) atau tipe data non-primitif lainnya (array, fungsi, objek lain).

## Membuat Object

Ada beberapa cara untuk membuat objek di JavaScript:

1. **Menggunakan Notasi Objek (Object Literal)**

   ```javascript
   const person = {
     name: "John",
     age: 30,
     city: "New York",
   };
   ```

2. **Menggunakan Constructor Function**

   ```javascript
   function Person(name, age, city) {
     this.name = name;
     this.age = age;
     this.city = city;
   }

   const person1 = new Person("John", 30, "New York");
   ```

3. **Menggunakan `Object.create()`**

   ```javascript
   const personPrototype = {
     greet: function () {
       console.log(`Hello, my name is ${this.name}`);
     },
   };

   const person2 = Object.create(personPrototype);
   person2.name = "John";
   person2.age = 30;
   person2.city = "New York";
   ```

## Mengakses dan Memanipulasi Properti Objek

Properti dalam objek dapat diakses dan dimanipulasi menggunakan dot notation atau bracket notation.

- **Dot Notation**

  ```javascript
  console.log(person.name); // Output: John
  person.age = 31;
  ```

- **Bracket Notation**
  ```javascript
  console.log(person["city"]); // Output: New York
  person["city"] = "Los Angeles";
  ```

Bracket notation berguna ketika properti memiliki nama yang tidak valid dalam notasi dot atau ketika nama properti ditentukan secara dinamis.

## Properti dan Metode dalam Objek

Objek dapat memiliki properti yang merupakan fungsi. Fungsi-fungsi ini disebut metode.

```javascript
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is John
```

## Menghapus Properti Objek

Properti dalam objek dapat dihapus menggunakan operator `delete`.

```javascript
delete person.age;
console.log(person.age); // Output: undefined
```

## Enumerasi Properti Objek

Anda bisa enumerasi properti objek menggunakan `for...in` loop atau metode `Object.keys()`, `Object.values()`, dan `Object.entries()`.

- **`for...in` Loop**

  ```javascript
  for (let key in person) {
    console.log(key); // Output: name, city
  }
  ```

- **`Object.keys()`, `Object.values()`, `Object.entries()`**
  ```javascript
  console.log(Object.keys(person)); // Output: ["name", "city"]
  console.log(Object.values(person)); // Output: ["John", "Los Angeles"]
  console.log(Object.entries(person)); // Output: [["name", "John"], ["city", "Los Angeles"]]
  ```

## Menggabungkan Objek

Anda bisa menggabungkan objek menggunakan metode `Object.assign()` atau spread operator.

- **`Object.assign()`**

  ```javascript
  const personDetails = { name: "John", age: 30 };
  const contactDetails = { phone: "123-456-7890", email: "john@example.com" };

  const person = Object.assign({}, personDetails, contactDetails);
  console.log(person);
  ```

- **Spread Operator**
  ```javascript
  const person = { ...personDetails, ...contactDetails };
  console.log(person);
  ```

###Destrukturisasi Objek

Destrukturisasi adalah cara untuk memecah objek menjadi variabel individu.

```javascript
const { name, age, city } = person;
console.log(name); // Output: John
console.log(age); // Output: 31
console.log(city); // Output: Los Angeles
```

## Rangkuman

Objek adalah tipe data penting dalam JavaScript yang memungkinkan penyimpanan dan manipulasi data kompleks. Memahami cara membuat, mengakses, dan memanipulasi objek adalah keterampilan dasar yang sangat penting dalam pengembangan aplikasi JavaScript.

[🏠Home](../README.md) | [Selanjutnya⏭](../array/README.md)
