# Tipe Data Non-Primitif di JavaScript

Tipe data non-primitif di JavaScript, juga dikenal sebagai tipe data referensi, adalah tipe data yang dapat menyimpan koleksi data dan lebih kompleks dibandingkan tipe data primitif. Sementara tipe data primitif seperti `number`, `string`, dan `boolean` menyimpan nilai langsung, tipe data non-primitif menyimpan referensi ke lokasi memori tempat data tersebut berada.

## Karakteristik Tipe Data Non-Primitif:

1. **Menyimpan Referensi, Bukan Nilai:**
   Tipe data non-primitif tidak menyimpan nilai langsung, tetapi menyimpan referensi (alamat) ke lokasi memori di mana data tersebut disimpan. Ini berarti beberapa variabel dapat merujuk ke objek yang sama.

   ```javascript
   let obj1 = { name: "John" };
   let obj2 = obj1;
   obj2.name = "Doe";
   console.log(obj1.name); // Output: Doe
   ```

2. **Dapat Menyimpan Koleksi Data:**
   Tipe data non-primitif dapat digunakan untuk menyimpan koleksi data yang lebih kompleks seperti array dan objek.

3. **Dapat Berubah:**
   Tipe data non-primitif dapat diubah (mutable). Kita dapat menambah, menghapus, atau mengubah properti atau elemen dalam objek atau array setelah dibuat.

   ```javascript
   let person = { name: "John", age: 30 };
   person.age = 31; // Mengubah nilai properti age
   ```

4. **Referensi Dibandingkan dengan Nilai:**
   Dua objek atau array dianggap sama jika mereka merujuk ke lokasi memori yang sama, bukan jika mereka memiliki nilai yang sama.

   ```javascript
   let arr1 = [1, 2, 3];
   let arr2 = [1, 2, 3];
   console.log(arr1 === arr2); // Output: false
   ```

5. **Tipe Data Utama:**
   Tipe data non-primitif utama di JavaScript adalah objek. Selain objek, ada beberapa jenis objek khusus seperti array, fungsi, dan objek built-in lainnya seperti `Date`, `Map`, `Set`, dll.

## Pentingnya Memahami Tipe Data Non-Primitif:

Memahami tipe data non-primitif sangat penting karena mereka digunakan secara luas dalam pemrograman JavaScript untuk menyusun data yang kompleks dan berinteraksi dengan struktur data yang lebih canggih. Pengetahuan tentang cara kerja tipe data ini, bagaimana mereka disimpan dan diakses, serta perbedaan antara tipe data primitif dan non-primitif, akan membantu dalam menulis kode yang efisien dan bebas dari bug.

## Pembahasan Tipe Data Non-Primitif

1. **[Object](./object/README.md)**
2. **[Array](./array/README.md)**
3. **[Function](./function/README.md)**
4. **[Date](./date/README.md)**
5. **[Map dan Set](./mapset/README.md)**
6. **[WeakMap dan WeakSet](./weakmapset/README.md)**
7. **[Operator typeof](./typeof/README.md)**
8. **[Built-in Objects](./built-in/README.md)**
9. **[Object Prototype dan Prototypal Inheritance](./prototype/README.md)**

[⏮Sebelumnya](../primitif/README.md) | [🏠Home](../README.md)
