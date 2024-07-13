# Variable Scopes di JavaScript

Dalam JavaScript, "scope" atau lingkup variabel menentukan di mana variabel dapat diakses atau dilihat dalam kode Kita. Ini adalah konsep yang sangat penting karena mengatur visibilitas dan waktu hidup dari variabel dan fungsi dalam program.

**Jenis-Jenis Scope di JavaScript:**

- **Global Scope:** Variabel yang dideklarasikan di luar semua fungsi atau blok menjadi variabel global dan dapat diakses dari mana saja dalam program. Ini termasuk variabel yang dideklarasikan tanpa kata kunci `var`, `let`, atau `const` di luar blok atau fungsi apa pun.

  ```javascript
  var globalVar = "I am global";
  console.log(globalVar); // Output: I am global
  ```

- **Function Scope:** Variabel yang dideklarasikan di dalam sebuah fungsi hanya dapat diakses di dalam fungsi tersebut. Ini berarti variabel ini tidak dapat diakses dari luar fungsi.

  ```javascript
  function myFunction() {
    var functionVar = "I am local to this function";
    console.log(functionVar); // Output: I am local to this function
  }
  myFunction();
  console.log(functionVar); // Error: functionVar is not defined
  ```

- **Block Scope:** Variabel yang dideklarasikan dengan `let` atau `const` di dalam sebuah blok (dalam `{}`) hanya dapat diakses di dalam blok tersebut. Ini termasuk di dalam loop, conditional, atau blok biasa.

  ```javascript
  if (true) {
    let blockVar = "I am local to this block";
    console.log(blockVar); // Output: I am local to this block
  }
  console.log(blockVar); // Error: blockVar is not defined
  ```

**Hosting:**

Hoisting adalah perilaku di mana deklarasi variabel dan fungsi dipindahkan ke bagian atas dari cakupan mereka sebelum kode dijalankan. Ini berarti bahwa variabel dan fungsi dapat digunakan sebelum mereka dideklarasikan dalam kode.

    ```javascript
    console.log(hoistedVar); // Output: undefined
    var hoistedVar = 'I am hoisted';
    ```

Namun, hanya deklarasi yang di-hoist, bukan inisialisasi. Dengan `let` dan `const`, variabel masih hoisted tetapi tidak dapat diakses sebelum deklarasi aktualnya karena berada dalam "temporal dead zone".

    ```javascript
    console.log(notHoisted); // ReferenceError: notHoisted is not defined
    let notHoisted = 'I am not hoisted';
    ```

**Aturan Penamaan Variabel:**

- Variabel harus dimulai dengan huruf, garis bawah (\_), atau simbol dolar ($).
- Tidak boleh menggunakan kata kunci JavaScript seperti `var`, `let`, `const`, `function`, dll.
- Penamaan harus deskriptif dan menggunakan camelCase untuk meningkatkan keterbacaan.

  ```javascript
  let validVariable = 'Valid';
  let _underscoreVariable = 'Also valid';
  let $dollarVariable = 'Valid too';
  let 1invalidVariable = 'Invalid'; // Error
  ```

**Scope Chain dan Closures:**

Scope chain adalah mekanisme di mana variabel di JavaScript dicari. Ketika suatu variabel diakses, JavaScript akan mencarinya di lingkup saat ini, lalu ke lingkup di atasnya, dan seterusnya hingga mencapai global scope.

Closure adalah fitur di mana fungsi dapat mengingat dan mengakses lingkup leksikal di mana ia dibuat, bahkan setelah fungsi tersebut dieksekusi di luar lingkup tersebut.

    ```javascript
    function outerFunction() {
        let outerVar = 'I am from outer scope';

        function innerFunction() {
            console.log(outerVar); // Output: I am from outer scope
        }
        return innerFunction;
    }
    const myFunction = outerFunction();
    myFunction();
    ```

Dengan memahami konsep-konsep ini, Kita dapat mengelola variabel dengan lebih baik dalam JavaScript dan menulis kode yang lebih bersih serta bebas dari bug.

[⏮ Sebelumnya](../rules/README.md) | [🏠Home](../README.md)
