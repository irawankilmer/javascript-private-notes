# Aturan Penamaan Variabel dalam JavaScript

Dalam penulisan JavaScript, mengikuti konvensi tertentu untuk penamaan variabel sangat penting agar kode Kita bersih, mudah dipahami, dan mudah dikelola. Berikut adalah beberapa aturan dan praktik terbaik yang harus diikuti:

## 1. **Karakter yang Diizinkan dalam Nama Variabel**

- **Karakter Alfanumerik**: Kita dapat menggunakan huruf (`a` hingga `z` dan `A` hingga `Z`) dan angka (`0` hingga `9`).
- **Karakter Khusus**: Kita juga dapat menggunakan underscore (`_`) dan tanda dolar (`$`).
- **Karakter Awal**: Nama variabel harus dimulai dengan huruf, underscore, atau tanda dolar. Tidak boleh dimulai dengan angka.

## 2. **Tidak Ada Spasi yang Diizinkan**

Nama variabel tidak boleh mengandung spasi. Jika sebuah nama terdiri dari beberapa kata, gunakan gaya penulisan camelCase.

## 3. **Sensitivitas Huruf Besar/Kecil**

Nama variabel dalam JavaScript peka terhadap huruf besar dan kecil. Artinya, `variableName` dan `variablename` adalah dua variabel yang berbeda.

## 4. **Kata Kunci yang Dicadangkan**

JavaScript memiliki daftar kata kunci yang dicadangkan yang tidak dapat digunakan sebagai nama variabel, seperti `if`, `else`, `function`, `return`, dll.
Referensi lengkap bisa dilihat [disini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).

## 5. **Penggunaan Nama yang Jelas dan Deskriptif**

Nama variabel harus jelas dan deskriptif untuk menunjukkan apa yang disimpan. Misalnya, hindari menggunakan nama seperti `x` atau `y`, dan pilih nama seperti `userName` atau `totalAmount` yang lebih mudah dipahami.

## 6. **Camel Case**

Gunakan gaya penulisan camelCase untuk nama variabel, di mana kata pertama dimulai dengan huruf kecil dan setiap kata berikutnya dimulai dengan huruf besar, misalnya `totalAmount`.

## 7. **Penghindaran Nama Spesial**

Hindari memulai nama variabel dengan garis bawah atau tanda dolar kecuali ada alasan khusus. Hal ini dapat membingungkan karena sering digunakan dalam penulisan kode khusus atau framework tertentu.

## 8. **Konstanta dengan Huruf Besar**

Untuk variabel yang nilainya tetap dan tidak berubah (const), biasanya ditulis dengan huruf besar, misalnya `MAX_USERS`.

Berikut adalah beberapa contoh penamaan variabel yang bagus dan jelek:

```javascript
// jelek
let a = "codedamn";
let y = 2015;

// bagus
let platformName = "codedamn";
let yearFounded = 2015;

// Benar
let numberOfUsers = 5000;

// Salah
let number_of_users = 5000;
let NumberOfUsers = 5000;

// Benar
let firstName = "John";

// Salah
let FirstName = "John";

// Benar
let userName = "John";

// Salah
let $name = "John";
let _name = "John";
```

## Tips Tambahan

- **Hindari menggunakan kata yang ambigu atau singkatan yang tidak umum.**
- **Pastikan nama variabel mencerminkan tujuan dan nilai yang disimpannya.**
- **Jika perlu, tambahkan komentar untuk menjelaskan fungsi variabel, terutama jika variabel tersebut digunakan dalam konteks yang kompleks.**

Dengan mengikuti aturan ini akan memastikan bahwa kode JavaScript Kita lebih mudah dibaca, dipahami, dan dikelola oleh diri sendiri dan oleh developer lain.

[⏮ Sebelumnya](../hoisting/README.md) | [🏠Home] | [Selanjutnya ⏭](../scope/README.md)
