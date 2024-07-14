# Map dan Set

## Map

`Map` adalah struktur data untuk menyimpan pasangan key-value di mana key dapat berupa tipe data apapun (primitif atau objek).

### Membuat dan Menggunakan Map

1. **Membuat Map**

   ```javascript
   const myMap = new Map();
   ```

2. **Menambahkan Elemen**

   ```javascript
   myMap.set("key1", "value1");
   myMap.set(2, "value2");
   myMap.set({}, "value3");
   console.log(myMap);
   ```

3. **Mengambil Nilai**

   ```javascript
   console.log(myMap.get("key1")); // Output: value1
   console.log(myMap.get(2)); // Output: value2
   ```

4. **Menghapus Elemen**

   ```javascript
   myMap.delete("key1");
   console.log(myMap);
   ```

5. **Memeriksa Keberadaan Kunci**

   ```javascript
   console.log(myMap.has(2)); // Output: true
   ```

6. **Ukuran Map**

   ```javascript
   console.log(myMap.size); // Output: 2
   ```

7. **Iterasi Map**
   ```javascript
   for (let [key, value] of myMap) {
     console.log(key, value);
   }
   ```

### Keuntungan Menggunakan Map

- Kunci bisa berupa tipe data apapun.
- Urutan elemen terjaga sesuai urutan penambahan.
- Performance lebih baik untuk operasi penambahan dan penghapusan.

## Set

`Set` adalah struktur data yang memungkinkan Anda menyimpan nilai-nilai unik dari tipe data apapun.

### Membuat dan Menggunakan Set

1. **Membuat Set**

   ```javascript
   const mySet = new Set();
   ```

2. **Menambahkan Elemen**

   ```javascript
   mySet.add(1);
   mySet.add(5);
   mySet.add(5); // Set hanya akan menyimpan satu nilai 5
   console.log(mySet); // Output: Set { 1, 5 }
   ```

3. **Menghapus Elemen**

   ```javascript
   mySet.delete(1);
   console.log(mySet); // Output: Set { 5 }
   ```

4. **Memeriksa Keberadaan Nilai**

   ```javascript
   console.log(mySet.has(5)); // Output: true
   ```

5. **Ukuran Set**

   ```javascript
   console.log(mySet.size); // Output: 1
   ```

6. **Iterasi Set**
   ```javascript
   for (let value of mySet) {
     console.log(value);
   }
   ```

### Keuntungan Menggunakan Set

- Memastikan semua elemen unik.
- Operasi penambahan, penghapusan, dan pemeriksaan keberadaan sangat cepat.

## Rangkuman

- **Map**: Struktur data untuk menyimpan pasangan kunci-nilai di mana kunci bisa berupa tipe data apapun.
- **Set**: Struktur data untuk menyimpan nilai-nilai unik dari tipe data apapun.

## Tips dan Trik

1. **Gunakan Map untuk Menyimpan Data yang Membutuhkan Kunci Unik**: Jika Anda butuh menyimpan pasangan kunci-nilai, Map lebih fleksibel dibandingkan objek biasa karena kuncinya bisa dari tipe data apapun.
2. **Gunakan Set untuk Menghindari Duplikasi**: Set sangat berguna saat Anda perlu menyimpan daftar elemen unik dan menghindari duplikasi.

[⏮Sebelumnya](../date/README.md) | [🏠Home](../README.md) | [Selanjutnya⏭](../weakmapset/README.md)
