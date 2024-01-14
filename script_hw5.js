//задание 1
const contrast = () => {
    let a = Number(prompt('число?'));
    let b = Number(prompt('число?'));
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
contrast();
//задание 2
const enterNumber = () => {
    let userNumber = Number(prompt('число?'))
    if (userNumber %2 == 0) {
        console.log('число четное');//return 'число четное';
    } else {
        console.log('число не четное');//return 'число не четное';
    }
}
enterNumber();
//задание 3
const square = () => {
    let answer = Number(prompt('число?'));
    let answer2 = (answer **2);
    console.log(answer2);
}
square();
const square2 = () => {
    let answer = Number(prompt('число?'));
    let answer2 = (answer **2);
    return answer2;
}
square2();
//задание 4
const age = () => {
    let age = Number(prompt('сколько вам лет?'));
if (age < 0) {
    console.log('не правильно');
} 
if (age > 0 && age < 13) {
    console.log('Привет друг!');
} else {
    console.log('Добро пожаловать!');
}
}
age();
//задание 5 
const even = () => {
    let a = prompt('введите число № 1');
    let b = prompt('введите число № 2');
    if (isNaN(a) || isNaN(b)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        console.log(a * b);
    }
}
even();
//задание 6
const cube = () => {
    let a = prompt('введите число');
    let b = a **3;
    if (isNaN(a)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${a} в кубе равняется ${b}`);
    }
}
cube();
//задание 7
function getCircleArea () {
    return (this.radius * 3,14)**2;
}
function getCircPerimetr () {
    return 2 * 3,14 * this.radius; 
}
const circle1 = {
    radius: 14,
    getArea: getCircleArea,
    getPerimeter: getCircPerimetr,
}
const circle2 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCircPerimetr,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());