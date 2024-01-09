let a = 0;
while (a < 2) {
    console.log ("Привет!");
    a++;
} 
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; 
}
let ii = 7;
while (ii <= 22) {
    console.log(i);
    ii++; 
}
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}
for (let key in obj) {
    console.log (`${key} — зарплата ${obj[key]}`);
}
for (n = 1000; n > 50; n / 2) {
    console.log (n)
} 