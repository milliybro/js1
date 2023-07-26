// Integer6

let abcde = +prompt(`9999 dan katta son kiriting :`);

M = abcde % 10000;
N = (abcde - M) / 1000;

e = M % 10;
d = ((M % 100) - e) / 10;
c = ((M % 1000) - d * 10 - e) / 100;
b = ((M % 10000) - c * 100 - d * 10 - e) / 1000;
a = (abcde - M) / 10000;

console.log(`Mingliklar xonasidagi son = `, b);
