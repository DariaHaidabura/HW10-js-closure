function sum(x) {
  return function (y) {
    return x + y;
  }
}

const sum1 = sum(1);
console.log(sum(1)(2));

for (let i = 1; i <= 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
} // поменяла var на let, и i с 0 поменяла на 1






  