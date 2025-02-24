//for este folosit pentru a itera de mai multe ori
let numbers: Array<number> = [2, 4, 6, 8, 10];
for (let i = 0; i <= numbers.length; i++) {
  console.log(i);
}
console.log(
  "-----------------------------------------------------------------"
);
// for of
for (let number of numbers) {
  console.log(number);
}
console.log(
  "-----------------------------------------------------------------"
);
//for in
for (let nr in numbers) {
  console.log(nr);
}
console.log(
  "-----------------------------------------------------------------"
);
//for each
numbers.forEach((num) => {
  console.log(num + 3);
});
console.log(
  "-----------------------------------------------------------------"
);
//do ... while
function sum(a: number, b: number): number {
  let total = 0;
  do {
    total += a;
    a++;
  } while (a < b);
  return total;
}
console.log(sum(2, 5));
console.log(
  "-----------------------------------------------------------------"
);
//while
let z = 3;
let t = 8;
while (z <= t) {
  z++;
  console.log(z);
}

console.log(
  "-----------------------------------------------------------------"
);
