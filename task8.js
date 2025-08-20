let N = prompt("Sonni kiriting");
function mukkamalKvadratSonlar(N){
    let natija = [];
    for (let i = 1; i <= N; i++) {
        if (i * i <= N) {
            natija.push(i * i);
        }
    }
    return natija;
}
console.log(mukkamalKvadratSonlar(N));