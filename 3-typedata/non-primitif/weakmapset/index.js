const myWeakMap = new WeakMap();

let obj = {};
myWeakMap.set(obj, "Hehe");

console.log(myWeakMap.get(obj));
