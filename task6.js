let N = prompt("Sonni kiriting");
function raqamlarSoni(N){
    let count = 0;
    do {
        count++;
        N = Math.floor(N / 10);
    } while (N > 0);
    return count;
}
console.log(raqamlarSoni(N));