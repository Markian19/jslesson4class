// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numbers(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// numbers(22, 85, 23)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers( a,b,c) {
//     if(a>b && a>c){
//         console.log(a);
//     } else if (b>a && b>c){
//         console.log(b);
//     }   else {
//         console.log(c);
//     }
// };
// numbers(22,85,23)

// - створити функцію яка повертає найбільше число з масиву
// let num = [1, 3, 22, 61, 9, 50, 43];
// function result(array) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i]
//         }
//
//     }
//     return (max);
// }
//
// console.log(result(num));


// - створити функцію яка повертає найменьше число з масиву

// let num = [1, 3, 22, 61, 9, 50, 43];
// function result(arry) {
//     let min = null;
//     for (let i = 0; i < arry.length; i++) {
//         if (arry[i]<min){
//             min=arry[i]
//         }
//     }
//     return min
// }
// console.log(result(num))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let mas = [10,20,30] //60
//
// function masiv(arg) {
//     let sum = 0;
//     for (const elem of arg) {
//         sum = sum +elem;
//     }
//     return sum;
// }
// console.log(masiv(mas))


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let numberMas = [10, 20, 30]
//
// function ddd(xxx) {
//     let sum = 0;
//     for (const element of xxx)
//         sum = sum + element
//
//     return sum / xxx.length
// }
//
// console.log(ddd([10, 20, 30]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function faaa() {
//     let min = null;
//     let max = null;
//     for (const element of arguments) {
//         if (element > max) {
//             max = element
//         } else if (element < min) {
//             min = element
//         }
//     }
//     console.log(max);
//     return min
// }
//
// console.log(faaa(-8,34,56))
// - створити функцію яка заповнює масив рандомними числами






// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function num(a,b,c) {
    if (a<b && a<c){
        console.log(a)
    }else if (b<a && b<c){
        console.log(b)
    }else if(c<a && c<b){
        console.log(c)
    }

}
num(5,30,14)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function num1(a,b,c) {
    if (a>b && a>c){
        console.log(a)
    }else if (b>a && b>c){
        console.log(b)
    }else if(c>a && c>b){
        console.log(c)
    }

}
num1(5,30,14)

// - створити функцію яка повертає найбільше число з масиву
let maxArray = [123,88,40,51,0,10,390,48,500]
function arrayMax(array) {
    let max = array[0];
    for (const element of array) {
        if(element > max){
            max = element;
        }
    }
    return max;
}
console.log(arrayMax(maxArray))
// - створити функцію яка повертає найменьше число з масиву

let maxArray1 = [123,88,40,51,1,10,390,48,500]
function arrayMax1(array) {
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
console.log(arrayMax1(maxArray1))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [12,55,98,18,9,11]
function arr1(sum){
    let result = 0;
    for (const sumElement of sum) {
        result = result + sumElement;
    }
    return result;
}
console.log(arr1(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arra1 = [12,55,98,18,9,11]
function arr11(sum){
    let result = 0;
    for (const sumElement of sum) {
        result = (result + sumElement);
    }
    return result/sum.length;
}
console.log(arr11(arra1))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// function cont(arg) {
//     let min = arg[0];
//     let max = arg[0];
//     for (const argumentElement of arg) {
//         if(argumentElement>max){
//             max=argumentElement;
//         }
//         if (argumentElement<min){
//             min = argumentElement
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(cont(12,44,123,79,145));
// - створити функцію яка заповнює масив рандомними числами

// function rundom(elem) {
//     let i = [];
//     for (let i = 0; i < elem; i++) {
//         const elemElement = elem[i];
//
//     }
//     return elemElement
// }
// console.log(rundom(100))
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function rundomaizer(lenght,limit){
    let musiv = [];
    for (let i=1;i<lenght+1;i++){
      musiv = Math.round(Math.random()*limit)
        }
    return musiv
}
console.log(rundomaizer(1,100))
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse(arr) {
    let arri = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;
}
