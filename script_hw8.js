function str_count (str, letter) {
    for (let i = 0; i < str_count.length; i++){
        a = str.includes(letter);
        console.log(a.length);
    }
}
    str_count("Hello", 'o')

    // let s = [1,2,3,4,5];
    // const map1 = s.map(elem => elem ** 2)
    // let result = map1.reduce()
    // console.log(map1.reduce);

    
    function squareSum(numbers){
        let map1 = numbers.map(elem => elem ** 2);
        let result = map1.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        });
    }
    squareSum([1,2,3,4,5])

    //5
    function addLength(str) {
        const words = str.split(' ');
        const result = words.map(word => `${word} ${word.length}`); // здесь
        return result;
      }
      console.log(addLength('apple ban'));
      //7
      function litres(time) {
        let l = time / 2;
        return Math.floor(l);
      }
      litres(10,8);
      //4 
      function squareSum(str) {
        let qwert = str.split('').reverse().join('')
        return qwert;
      }
      squareSum ('abcdef');

