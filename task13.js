let a =prompt("a sonni kiriting");
let b=prompt("b sonni kiriting");
let c=prompt("c sonni kiriting");
function findMaxOfThree(a, b, c){
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log(findMaxOfThree(a, b, c));