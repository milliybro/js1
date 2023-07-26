Integer3

let abc =+prompt(`3 xonali son kiriting :`);

M = abc % 100;

c = M % 10;
b = (M - c) / 10;
a = (abc - M) / 100;

console.log(`Teskari son `, c*100+b*10+a);
