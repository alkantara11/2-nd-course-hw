//1
let a = 'мама мыла раму';
console.log(a.toUpperCase());
//2
let b = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let serach = 'ко';
b.forEach((b1) => {

        if (b1.toLocaleLowerCase().includes(serach.toLocaleLowerCase()))
        console.log(b1);
});
let c = ['яблоко', 'груша', 'гриб', 'огурец'];
let serach1 = 'груша';
c.forEach((c1) => {

        if (c1.toLocaleLowerCase().includes(serach1.toLocaleLowerCase()))
        console.log(c1);
});
let d = ['Дом', 'Банк', 'Больница', 'Театр'];
let serach2 = 'Кино';
d.forEach((d1) => {

        if (d1.toLocaleLowerCase().includes(serach2.toLocaleLowerCase()))
        console.log(d1);
});
//3
let e = 32.58884;
console.log(Math.floor(e));
console.log(Math.ceil(e));
console.log(Math.round(e));
//4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));
//5
let f = Math.random() * 10;
console.log(Math.round(f));
//6
let n = prompt('введите число');
function getRandom() {
    const arr = [];
    i = n / 2;
    i = Math.floor(i);
for (let index = 0; index < i; index++) {
    console.log((Math.round(Math.random() * n)));
}
}
getRandom();
//7
function getRandomInt(minValue, maxValue) {   
    return Math.round(Math.random() * (maxValue - minValue)) + minValue
    }                            
    console.log(getRandomInt(1, 100));             
//8 
let myDate = new Date();
console.log(myDate);
//9
let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + days73;
let daysAfter73 = new Date (searchDate);
console.log(daysAfter73);
//10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate2 = new Date();
let fullDate = "Дата: " + myDate2.getDate() + " " + months[myDate2.getMonth()] + " " +  myDate2.getFullYear() +" " +  "- это" + " " + days[myDate2.getDay()];
console.log(fullDate);
