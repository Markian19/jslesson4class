// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function numbers(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

numbers(22, 85, 23)
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
//
// function result(arr) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//
//     }
//     return max
// }
//
// console.log(result(num));


// - створити функцію яка повертає найменьше число з масиву
//
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

let numberMas = [10, 20, 30]

function ddd(xxx) {
    let sum = 0;
    for (const element of xxx)
        sum = sum + element

    return sum / xxx.length
}

console.log(ddd([10, 20, 30]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

function faaa() {
    let min = null;
    let max = null;
    for (const element of arguments) {
        if (element > max) {
            max = element
        } else if (element < min) {
            min = element
        }
    }
    console.log(max);
    return min
}

console.log(faaa(-8,34,56))
// - створити функцію яка заповнює масив рандомними числами


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].