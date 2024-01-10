let password = prompt('Введите пароль');
if (password == '123') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно!')
}
let n = prompt('введите число');
if (n => 1 && n <=9  ) {
    alert('верно')
} else {
    alert('Неверно')
}
let e = prompt('введите число');
let d = prompt('введите число');
if (d > 100 || e > 100) {
    alert('верно')
} else {
    alert('неверно')
}
let a = '2';
let b = '3';
result = Number (a) + Number (b);
alert (result);
const month = Number( prompt("Введите номер месяца") )
switch (month)
 {
    case 1:
    case 2:
    case 12:
    console.log("зима");
    break;       
    case 3:
    case 4:
    case 5:
    console.log("весна");
    break;
    case 6:
    case 7:
    case 8:
    console.log("лето");
    break;
    case 9:
    case 10:
    case 11:
    console.log("осень");
    break;
    default: console.log('no');
        break;
}