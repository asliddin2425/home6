function maxraqam(N){
    let max = 0;
    while (N > 0) {
        let digit = N % 10;
        if (digit > max) {
            max = digit;
        }
        N = Math.floor(N / 10);
    }
    return max;
}
console.log(maxraqam(2098352));