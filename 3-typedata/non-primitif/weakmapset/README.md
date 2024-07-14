# WeakMap dan WeakSet

## WeakMap

`WeakMap` adalah koleksi pasangan key-value di mana key-nya harus berupa objek dan value-nya bisa berupa tipe data apapun. `WeakMap` tidak mencegah pengumpulan sampah pada objek key.

### Membuat dan Menggunakan WeakMap

1. **Membuat WeakMap**

   ```javascript
   const myWeakMap = new WeakMap();
   ```

2. **Menambahkan Elemen**

   ```javascript
   let obj = {};
   myWeakMap.set(obj, "value");
   console.log(myWeakMap.get(obj)); // Output: value
   ```

3. **Menghapus Elemen**

   ```javascript
   myWeakMap.delete(obj);
   console.log(myWeakMap.get(obj)); // Output: undefined
   ```

4. **Memeriksa Keberadaan key**
   ```javascript
   console.log(myWeakMap.has(obj)); // Output: false
   ```

### Keuntungan Menggunakan WeakMap

- **Pengumpulan Sampah (Garbage Collection)**: Jika tidak ada referensi lain ke objek yang digunakan sebagai key, objek tersebut akan dikumpulkan oleh garbage collector.
- **Keamanan Data**: Data yang disimpan dalam `WeakMap` tidak dapat diiterasi atau diakses langsung, meningkatkan keamanan data sensitif.

## WeakSet

`WeakSet` adalah koleksi objek yang hanya menyimpan referensi lemah terhadap objek-objek tersebut. Seperti `WeakMap`, objek di dalam `WeakSet` dapat dikumpulkan oleh garbage collector jika tidak ada referensi lain yang mengarah ke objek tersebut.

### Membuat dan Menggunakan WeakSet

1. **Membuat WeakSet**

   ```javascript
   const myWeakSet = new WeakSet();
   ```

2. **Menambahkan Elemen**

   ```javascript
   let obj1 = {};
   myWeakSet.add(obj1);
   console.log(myWeakSet.has(obj1)); // Output: true
   ```

3. **Menghapus Elemen**
   ```javascript
   myWeakSet.delete(obj1);
   console.log(myWeakSet.has(obj1)); // Output: false
   ```

### Keuntungan Menggunakan WeakSet

- **Pengumpulan Sampah (Garbage Collection)**: Sama seperti `WeakMap`, jika tidak ada referensi lain ke objek, objek tersebut akan dikumpulkan oleh garbage collector.
- **Keamanan Data**: Elemen-elemen dalam `WeakSet` tidak dapat diiterasi atau diakses langsung, meningkatkan keamanan data.

## Perbedaan Utama Antara Map/Set dan WeakMap/WeakSet

- **Garbage Collection**: `WeakMap` dan `WeakSet` memungkinkan objek yang tidak lagi direferensikan untuk dikumpulkan oleh garbage collector, sedangkan `Map` dan `Set` tidak.
- **Kunci dan Elemen**: `WeakMap` hanya menerima objek sebagai kunci dan `WeakSet` hanya menyimpan objek, sementara `Map` dan `Set` bisa menyimpan berbagai tipe data.
- **Iterasi**: `WeakMap` dan `WeakSet` tidak dapat diiterasi, sehingga elemen-elemen di dalamnya tidak bisa diakses secara langsung.

## Rangkuman

- **WeakMap**: Koleksi pasangan key-value dengan key objek yang tidak mencegah garbage collection.
- **WeakSet**: Koleksi objek dengan referensi lemah yang memungkinkan garbage collection.

## Tips dan Trik

1. **Gunakan WeakMap untuk Data Sensitif**: Karena `WeakMap` tidak dapat diiterasi, ini adalah pilihan yang baik untuk menyimpan data sensitif.
2. **Gunakan WeakSet untuk Keamanan Referensi Objek**: `WeakSet` adalah pilihan yang baik ketika kita perlu memastikan bahwa objek dalam koleksi dapat dihapus oleh garbage collector jika tidak ada referensi lain.

[⏮Sebelumnya](../mapset/README.md) | [🏠Home](../README.md) | [Selanjutnya⏭](../typeof/README.md)
