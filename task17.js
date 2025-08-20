let son = prompt("Sonni kiriting");
function palindromCheck(son){

    if (son === son.split("").reverse().join("")) {
        return "haqiqiy";
    } else {
        return "notogri";
    }
}
console.log(palindromCheck(son));