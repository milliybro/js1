// Begin1

// let a = +prompt("a sonni kiriting: ");
// let b = +prompt("b sonni kiriting: ");

// S = a * b;

// P = 2 * (a + b);

// console.log("Yuzasi: ", S);
// console.log("Perimetri: ", P);

// Begin2
// const PI = 3.14;
// let d = +prompt("d ni kiriting: ");

// L = PI * d;
// r = d / 2;
// S = PI * r ** 2;

// console.log("Aylna uzunligi: ", L);
// console.log("Aylna yuzasi: ", S);

// Begin3
// let a = +prompt("a sonni kiriting: ");

// V = a ** 3;
// S = (6 * a) ** 2;

// console.log("Kubning hajmi: =", V);
// console.log("Kubning to'la sirti: =", S);

// Begin4

// let a= +prompt("a tamonni kiriting: ");
// let b= +prompt("b tamonni kiriting: ");
// let c= +prompt("c tamonni kiriting: ");

// V = a * b * c
// S = 2 * (a * b + b * c + a * c)

// console.log("Paralelepepid hajmi =",V);
// console.log("Paralelepepid to'la sirti =",S);

// Begin5

// let a = +prompt(`a sonni kiriting: `);
// let b = +prompt(`b sonni kiriting: `);

// M = (a + b) / 2;

// console.log("O'rta arifmetik = ", M);

// Begin6

// let  a=+prompt(`a katetni kiriting: `);
// let  b=+prompt(`b katetni kiriting: `);

// c = (a**2+b**2)**(1/2);
// P = a + b + c

// console.log(`Gipotenuza = `, c);
// console.log(`Perimetr = `, P);

// Begin7

// let r1 = +prompt(`radius-1 kiriting: `);
// let r2 = +prompt(`radius-2 kiriting: `);

// const PI = 3.14;

// S1 = PI * r1;
// S2 = PI * r2;
// S = PI * (r1 ** 2 - r2 ** 2);

// console.log(`Birinchi aylana yuzasi = `, S1);
// console.log(`Ikkinchi aylana yuzasi = `, S2);
// console.log(`Yuzalar ayirmasi = `, S);

// Begin8
// let L = +prompt(`Aylana uzunligini kiriting: `);

// const PI = 3.14;

// R = (2 * PI) / L;
// S = PI * R ** 2;

// console.log(`Aylana radius = `, R);
// console.log(`Aylana yuzasi = `, S);

// Begin9

// let x1 = +prompt(`x1 ni kiriting: `);
// let x2 = +prompt(`x2 ni kiriting: `);
// let y1 = +prompt(`y1 ni kiriting: `);
// let y2 = +prompt(`y2 ni kiriting: `);

// L = ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** (1 / 2);

// console.log(`Masofa = `, L);

// Begin10
// let a=+prompt(`a sonni kiriting: `);
// let b=+prompt(`b sonni kiriting: `);
// let c=+prompt(`c sonni kiriting: `);

// m=a;
// n=b;

// a=n;
// b=c;
// c=m;

// console.log(`a =`, a);
// console.log(`b =`, b);
// console.log(`c =`, c);

// Begin11

// let x= +prompt(`x ni kiriting: `);

// y = 4 * (x - 3)**6 - 7 * (x - 3)**3 + 2;

// console.log(`y =`, y);

// Begin12

// let A = +prompt(`sonni kiriting: `);
// let m = +prompt(`darajani kiriting: `);
// N = A;
// A = A ** m;

// console.log(N, ` ning`, m, ` darajasi = `, A);

// Begin13

// let Tf = +prompt(`Farangeytni kiriting: `);

// Tc = (Tf - 32) * 5/9;

// console.log(`Selsiy = `,Tc);

// Begin14

// let X = +prompt(`Necha kg shokolad :`);
// let A = +prompt(`Shokolad summasi :`);
// let Y = +prompt(`Necha kg konfet :`);
// let B = +prompt(`Konfet summasi :`);

// M = A / X;
// N = B / Y;

// console.log(`Shokolad Konfetdan `,M-N,` qimmat` );

// Begin15

// let X = +prompt(`X kg olma :`);
// let A = +prompt(`Olma narxi :`);
// let Y = +prompt(`Y kg olma :`);
// let B = +prompt(`Olma narxi :`);

// console.log(`Umuniy savdo: `, X * A + Y * B,`so'm`);

// Integer1

// let abc = 753;

// M = abc % 100;

// c = M % 10;

// console.log(`Birlar `, c);
// console.log(`O'nlar `, (M-c) / 10);

// Integer2

// let abc = 486;

// M = abc % 100;

// c = M % 10;
// b = (M - c) / 10;
// a = (abc - M) / 100;

// console.log(`Yig'indi `, a + b + c);

// Integer3

// let abc = 486;

// M = abc % 100;

// c = M % 10;
// b = (M - c) / 10;
// a = (abc - M) / 100;

// console.log(`Teskari son `, c*100+b*10+a);

// Integer4

// let abc = 123;

// M = abc % 100;

// c = M % 10;
// b = (M - c) / 10;
// a = (abc - M) / 100;

// console.log(`Almashgan son `, b*100+c*10+a);

// Integer5

// let abc = 123;

// M = abc % 100;

// c = M % 10;
// b = (M - c) / 10;
// a = (abc - M) / 100;

// console.log(`Almashgan son `, a*100+c*10+b);

// Integer6

// let abcde = 98123;

// M = abcde % 10000;
// N = (abcde - M) / 1000;

// e = M % 10;
// d = ((M % 100) - e) / 10;
// c = ((M % 1000) - d * 10 - e) / 100;
// b = ((M % 10000) - c * 100 - d * 10 - e) / 1000;
// a=(abcde-M)/10000

// console.log(`Mingliklar xonasidagi son = `,b);

// Interger7

// let N = 10000;

// let restSeconds = N % 3600;

// let second = restSeconds % 60;

// let minute = (N - second) / 60;

// console.log(minute,` daqiqa`);

// Integer8

// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;


// console.log(hour,`soat`);

// Interger9

// let N = 10000;

// let restSeconds = N % 3600;

// let second = restSeconds % 60;

// let minute = (N - second) / 60;

// console.log(minute,` daqiqa`);
// console.log(second,` soniya`);

// Integer10

// let N = 10000;

// let restSeconds = N % 3600;

// let hour = (N - restSeconds) / 3600;

// console.log(hour, `soat`);
// console.log(restSeconds, `sekund`);

