console.log("===Membuat object===");
/** 1. Object Literal */
const siswa = {
  nisn: "32198",
  nama: "Suci Aulia Agniani",
  kelas: "XII RPL 1",
};

console.log(siswa);

/** 2. Object constructor function */
function Siswa(nisn, nama, kelas) {
  this.nisn = nisn;
  this.nama = nama;
  this.kelas = kelas;
}

const siswa1 = new Siswa("2342", "Hilman", "XII RPL 3");
console.log(siswa1);

/** 3. Object create */
const dataSiswa = {
  sayHello: function () {
    console.log(`nisn: ${this.nisn}, nama: ${this.nama}, kelas: ${this.kelas}`);
  },
};

const siswa2 = Object.create(dataSiswa);
siswa2.nisn = "52317";
siswa2.nama = "Siti Adawiyah";
siswa2.kelas = "XII RPL 2";
siswa2.sayHello();

/** akses dan manipulasi properti obejct */
console.log("===mengakses dan manipulasi properti object===");
// 1. dot notation
console.log(siswa.kelas);
console.log(siswa1.kelas);
console.log(siswa2.kelas);

siswa2.kelas = "XII RPL 35";
console.log(siswa2.kelas);

// 2. Bracket notation
console.log(siswa["nama"]);
console.log(siswa1["nama"]);
console.log(siswa2["nama"]);

siswa["nama"] = "Jajang Suherman";
console.log(siswa["nama"]);

/** Properti dan metode dalam object */
console.log("===Properti dan metode dalam object===");
const guru = {
  nama: "Komarudin",
  alamat: "Garut",
  sayHello: function () {
    console.log(`Hello ${this.nama} alamat Anda di ${this.alamat}`);
  },
};

guru.sayHello();
console.log(guru.alamat);
