const bitShift = (v, h, w) =>
  parseInt(v, 2) * 2 ** (h * (w[1] == "e" ? 1 : -1));

console.log(bitShift(1000, 1, "right")); //output: 4
console.log(bitShift(1000, 1, "left")); //output: 16
console.log(bitShift(100, 2, "left")); //output: 16
console.log(bitShift(10000, 3, "right")); //output: 2
console.log(bitShift(1000, 0, "right")); //output: 8
console.log(bitShift(1000, 0, "left")); //output: 8
