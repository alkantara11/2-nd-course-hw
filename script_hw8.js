//1 
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 let sort = people.sort(compare);
 function compare(a, b) {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  }
 console.log(sort);
 //2
 function isPositive(number) {
    return number > 0;
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}
    function isMale(people1) {
    // писать код тут
    return people1.gender === 'male';
    }
    const people1 = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    console.log(filter(people1, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
    //3
    let timerId = setInterval(() => console.log(new Date), 1000);
    setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 300000);
    //4
    function delayForSecond(callback) {
        // Код писать можно только внутри этой функции
        setTimeout(callback, 1000);
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   });
   //5
   // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
setTimeout(() => {
    delayForSecond(sayHi('Глеб'))
  }, 3000);





