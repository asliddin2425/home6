let N = prompt("Sonni kiriting");
function kopaytirishJadvali(N){
    for (let i = 1; i <= 10; i++) {
        console.log(N + " * " + i + " = " + (N * i));
    }
}
console.log(kopaytirishJadvali(N));