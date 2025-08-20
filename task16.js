let parol = prompt("Parolni kiriting");
function parolTekshirish(parol) {
    if (parol.length >=8) {
        return "Yaroqli parol";
    }else{
        return "Yaroqsiz parol";
    }
}
console.log(parolTekshirish(parol));