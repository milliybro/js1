Begin7

let r1 = +prompt(`radius-1 kiriting: `);
let r2 = +prompt(`radius-2 kiriting: `);

const PI = 3.14;

S1 = PI * r1;
S2 = PI * r2;
S = PI * (r1 ** 2 - r2 ** 2);

console.log(`Birinchi aylana yuzasi = `, S1);
console.log(`Ikkinchi aylana yuzasi = `, S2);
console.log(`Yuzalar ayirmasi = `, S);
