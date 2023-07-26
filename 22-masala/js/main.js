// Interger7

let N =+prompt(`sekund kiriting :`);


let restSeconds = N % 3600;

let second = restSeconds % 60;

let minute = (N - second) / 60;

console.log(minute,` daqiqa`);
