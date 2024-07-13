/** Membuat Array */
console.log("===Membuat Array===");
/** Array literal */
const number = [1, 2, 3, 4, 5, 6];
const siswa = ["Siti", "Marwah", "Yahya"];

/** Array constructor */
const number1 = new Array(1, 2, 3, 4, 5, 6, 7);
const siswa1 = new Array("Jajang", "Pardan", "Mikail");

console.log(number1);
console.log(siswa1);

/** Mengakses Array dan manipulasi */
console.log("===Mengakses Array dan manipulasi===");
/** Mengakses Array */
console.log(number[0]);
console.log(number1[0]);
console.log(siswa[1]);
console.log(siswa1[2]);

/** Mengubah elemen Array */
number[0] = 100;
console.log(number[0]);

siswa[0] = "Jihaduni";
console.log(siswa[0]);

number1[6] = 8080;
console.log(number1[8]);

siswa1[2] = "Ridwan";
console.log(siswa1[2]);

/** Menambah elemen ke Array */
console.log("===Menambah elemen ke Array===");
number.push(900);
console.log(number);

siswa.push("Kirana Condong");
console.log(siswa);

number1.push(3066);
console.log(number1);

siswa1.push("Firdaus");
console.log(siswa1);