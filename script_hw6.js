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
//4 сделать из этого вложенный  
let c = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1]
];
//5
