Integer4

let abc =+prompt(`3 xonali son kiriting :`);

M = abc % 100;

c = M % 10;
b = (M - c) / 10;
a = (abc - M) / 100;

console.log(`Almashgan son `, b*100+c*10+a);
