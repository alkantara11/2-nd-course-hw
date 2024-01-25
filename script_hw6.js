//1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
}
//2
const a = [1, 5, 4, 10, 0, 3];
const i = a.indexOf(4);
console.log(i);
//3
let b = '1, 3, 5, 10, 20';
b = b.split(',');
b = b.join(' ');
console.log(b);
//4 
let table = []
for (let i = 0; i < 3; i++) {
  table[i] = [];
  for (let j = 0; j < 3; j++) {
    table[i][j] = 1;
  };
};
console.log(table);
//5
let d = [1, 1, 1];
d.push(2, 2, 2);
console.log(d);
//6 
let e = [9, 8, 7, 'a', 6, 5];
console.log(e.filter((el) => typeof el === 'number'));
//7 
const f = [9, 8, 7, 6, 5];
if (f.includes(Number(prompt('число?')))) {
    alert('угадал');
} else {
    alert('не угадал');
}
//8 
let j = 'abcdef';
console.log(j.split('').reverse().join(''));
//9 
h = [[1, 2, 3,],[4, 5, 6]];
h = h.flat();
console.log(h);
//10
g = [1, 3, 5, 7];
for (let i = 0; i < g.length; i++) {
    const element = g[i];
    console.log(g[i] + g[i + 1]);
    if (g[i] == g.length-1) break;  
}
//11
let s = [1,2,3,4,5];
  let newS = s.map(function(elem) {
      console.log(elem ** 2);
})
//12
function arrSum(num) {
    for (let i = 0; i < num.length; i++) {
    sum = num[i]+num[i+1];
    console.log(sum.length);
} 
} 
arrSum(['слово', '', 'слог', 'длинное предложение', 'буква']);
//13
function filterPositive(array) {
    const negative = []; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) { 
            negative.push(array[i]) 
        }
    }
    return negative 
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
    