//1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 10) break; 
console.log(numbers[i]);
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
let c = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1]
];
//5
let d = [1, 1, 1];
d = d.push(2, 2, 2);
console.log(d);
//6 
let e = [9, 8, 7, 'a', 6, 5];
e.filter((el) => typeof el === 'number')
console.log(e);
//7 
const f = [9, 8, 7, 6, 5];
if (f.includes(Number(prompt('число?')))) {
    alert('угадал');
} else {
    alert('не угадал');
}
//8 
let j = 'abcdef';
j = j.split(',');
j = j.reverse();
console.log(j);
//9 
h = [[1, 2, 3,],[4, 5, 6]];
h = h.flat();
console.log(h);
//10
g = [1, 3, 5, 7];
for (let i = 0; i < g.length; i++) {
    const element = g[i];
    console.log(g[i] + g[i + 1]);  
}
//11
let s = [1,2,3,4,5];
  let newS = s.map(function(elem) {
      console.log(elem ** 2);
})
//12
u = ['мама мыла раму, а потом пришел слон, вот'];
console.log(u.length);
//13
    function filterPositive(array) {
    const negative = [-1, 0, 5, -10, 56];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
        negative.push(array[i])
        }
    }
    return negative
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
    