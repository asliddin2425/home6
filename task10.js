let N= prompt("Sonni kiriting");
function pascalUchburchagi(N){
    let natija = [];
    for (let i = 0; i < N; i++) {
        natija[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                natija[i][j] = 1;
            } else {
                natija[i][j] = natija[i - 1][j - 1] + natija[i - 1][j];
            }
        }
    }
    return natija;  

}
console.log(pascalUchburchagi(N));