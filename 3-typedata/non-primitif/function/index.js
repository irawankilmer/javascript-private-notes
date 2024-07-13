/** Membuat Function */
console.log("===Membuat function===");
// 1. Function declaration
function sayHello(nama) {
  return `Hello ${nama}, saya function declaration`;
}
console.log(sayHello("jajang"));

// 2. Function expretion
const saySapa = function (nama) {
  return `Hello ${nama}, saya function expretion`;
};
console.log(saySapa("Komarudin"));

// 3. Arrow Function
const sayJuga = (nama) => `Hello ${nama}, saya arrow function cara 1`;
console.log(sayJuga("Ugun"));

const sayJuga2 = (nama) => {
  return `Hello ${nama} saya arrow function cara 2`;
};
console.log(sayJuga2("Jijib"));

/** Default parameter */
console.log("===default parameter");
function heDefault(nama = "Jajang") {
  if (nama == "Jajang") {
    return `Hello ${nama}, Anda default parameter`;
  } else {
    return `Hello ${nama}`;
  }
}
console.log(heDefault());
console.log(heDefault("Jindan"));

console.log("===Rest Parameter===");
/** Rest Parameter */
function himpun(...nama) {
  return nama;
}
console.log(himpun("komar", "Jja", "Pisdin"));
