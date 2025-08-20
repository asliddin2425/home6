let N = prompt("Sonni kiriting");
function uchburchakShakl(N) {
    for (let i = 1; i <= N; i++) {
        let qator = "";
        for (let j = 1; j <= i; j++) {
            qator += "* ";
        }
        console.log(qator);
    }
}
uchburchakShakl(N);
