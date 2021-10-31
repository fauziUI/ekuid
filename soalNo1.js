//input here exp => [4, 1, 3, 5, 1, 2, 7, 8, 9] //
let input = [4, 1, 3, 5, 1, 2, 7, 8, 9];

function mean(angka) {
  let jumlah = 0;
  for (let i = 0; i < angka.length; i++) {
    jumlah += angka[i];
  }
  return (jumlah / angka.length);
}

function median(angka) {
  if (angka.length % 2 == 0) {
    return (0.5 * (angka[(angka.length / 2) - 1] + angka[angka.length / 2]));
  } else {
    return (angka[angka.length / 2 - 0.5]);
  }
}

function soalNo1(angka) {
    let wadah = [];
    for (let i = 0; i < angka.length; i++) {
        if (angka[i-1] > angka[i]) {
            console.log([{mean: mean(wadah), median: median(wadah)}])
            wadah = [angka[i]]
        }
        else {wadah.push(angka[i])}
    }
    console.log([{mean: mean(wadah), median: median(wadah)}])
    
}

soalNo1(input);