let N=prompt("Enter a number:");
function tubSonlarChiqarish(N) {
  let i = 2;
  while (i <= N) {
    let j = 2;
    let tub = true;

    while (j < i) {
      if (i % j === 0) {
        tub = false;
        break;
      }
      j++;
    }

    if (tub) {
      console.log(i);
    }
    i++;
  }
}

tubSonlarChiqarish(30);
