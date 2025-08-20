let N = prompt("Sonni kiriting")
function fibonacci(N) {
  let a = 0, b = 1;

  do {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  } while (a < N);
}
console.log(fibonacci(N));


