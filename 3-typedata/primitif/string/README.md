# String

String dalam JavaScript adalah urutan karakter yang digunakan untuk mewakili teks. String bisa berisi huruf, angka, simbol, dan spasi. String dideklarasikan menggunakan tanda kutip tunggal (`'`), tanda kutip ganda (`"`), atau backticks (`` ` ``).

```bash
let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let backtickString = `Hello, world!`;
```

## Jenis Kutipan dan Interpolasi String

1. **Tanda Kutip Tunggal dan Ganda**: Digunakan untuk mendeklarasikan string sederhana. Perbedaannya hanya pada gaya penulisan, tidak ada perbedaan dalam fungsionalitas.

2. **Backticks**: Digunakan untuk string yang mendukung interpolasi dan multi-line. Interpolasi memungkinkan menyisipkan variabel dan ekspresi ke dalam string.

```javascript
let name = "John";
let greeting = `Hello, ${name}!`; // Output: Hello, John!
```

## Karakteristik String

- **Immutability**: String di JavaScript bersifat immutable, yang berarti setelah string dibuat, isinya tidak dapat diubah. Setiap operasi yang memodifikasi string sebenarnya menghasilkan string baru.

```javascript
let original = "Hello";
let modified = original + " World"; // "Hello World"
console.log(original); // "Hello"
```

## Metode untuk Manipulasi String

1. **Concatenation**: Menggabungkan dua string menggunakan operator `+`.

```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; // "Hello World"
```

2. **Length**: Mengambil panjang string.

```javascript
let text = "JavaScript";
console.log(text.length); // 10
```

3. **Accessing Characters**: Mengakses karakter individu dalam string menggunakan indeks.

```javascript
let char = text[0]; // "J"
```

4. **Substring Methods**:
   - `slice(start, end)`: Mengambil bagian dari string dari indeks `start` hingga `end` (tidak termasuk `end`).
   - `substring(start, end)`: Sama seperti `slice`, tetapi tidak mendukung indeks negatif.
   - `substr(start, length)`: Mengambil bagian dari string dari indeks `start` dengan panjang `length`.

```javascript
let str = "Hello, world!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substr(0, 5)); // "Hello"
```

5. **Case Conversion**: Mengubah huruf besar-kecil.

```javascript
let text = "JavaScript";
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"
```

6. **Searching and Replacing**:
   - `indexOf(substring)`: Mengembalikan indeks pertama dari substring.
   - `lastIndexOf(substring)`: Mengembalikan indeks terakhir dari substring.
   - `replace(searchValue, newValue)`: Mengganti substring tertentu dengan yang baru.

```javascript
let text = "JavaScript is awesome";
console.log(text.indexOf("is")); // 11
console.log(text.replace("awesome", "great")); // "JavaScript is great"
```

7. **Trimming**: Menghapus spasi di awal dan akhir string.

```javascript
let rawString = "  Hello, world!  ";
console.log(rawString.trim()); // "Hello, world!"
```

8. **Pattern Matching**: Menggunakan regular expressions untuk mencocokkan pola dalam string.

```javascript
let text = "The quick brown fox";
let match = text.match(/quick/); // ["quick"]
let containsQuick = /quick/.test(text); // true
```

## Tips dan Trik

- **Escape Characters**: Gunakan backslash (`\`) untuk menyisipkan karakter khusus seperti tanda kutip atau karakter baru (`\n`).

```javascript
let text = 'She said, "Hello!"';
```

- **Template Literals**: Sangat berguna untuk membuat string yang kompleks dengan banyak variabel dan ekspresi.

[⏮ Sebelumnya](../number/README.md) | [🏠Home](../README.md) | [Selanjutnya ⏭](../boolean/README.md)
