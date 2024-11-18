for (i = 1; i <= 10; i++) {
    console.log(i);
}

for (i = 10; i >= 1; i--) {
    console.log(i);
}

let j = 1;
while (j <= 10) {
    console.log (j);
    j++;
}

let k = 10;
while (k >= 1) {
    console.log (k);
    k--;
}

let l = 1;
do {
    console.log(l)
    l++;
}
while (l <= 10);

let m = 10;
do {
    console.log(m)
    m--;
}
while (m >= 1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const number of numbers) {
    console.log(number);
}

for (let n = "cute cat"; n.length <= 10; n = " " + n) {
    tenCharacters = n;
}
console.log(tenCharacters);