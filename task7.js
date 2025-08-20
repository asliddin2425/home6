let N  = prompt("Sonni kiriting");
function armstrongSonlar(N){
    let sum = 0;
    let temp = N;
    let digits = 0;

        while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

  

    return sum === N;
}
console.log(armstrongSonlar(N));