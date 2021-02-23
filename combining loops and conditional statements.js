//Найти количество элементов массива равных своему порядковому номеру (индексу).
const arr = [2, 4, 6, 8, 0, -19, 9];
let count = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] === i) {
 count++;
 }
}

//Найдите количество четных положительных элементов массива.
const arr = [2, 4, 5, -8, 9, -1];
let countPositiveEven = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 === 0 && arr[i] > 0) {
 countPositiveEven++;
 }
}

//Дан массив слов. Найдите количество слов, которые начинаются с буквы "a".
const arr = ['man', 'small', 'create'];
let wordsStartsWithA = 0;
for (i = 0; i < arr.length; i++) {
if (arr[i][0] === 'a') {
 wordsStartsWithA++;
 }
}

//Дан массив слов. Найдите количество слов длиной 5
const arr = ['take', 'late', 'available'];
let wordsOf5Letters = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i].length === 5) {
 wordsOf5Letters++;
 }
}

//Найдите общее количество гласных букв ("a", "o", "u", "i", "e") в строке.
const str = 'i am a champion';
let countOfVowels = 0;
for (let i = 0; i < str.length; i++) {
if (str[i] === 'a' || str[i] === 'o' || str[i] === 'e' || str[i] === 'i' || str[i] === 'u') {
 countOfVowels++;
 }
}

//Найдите количество пробелов в строке.
let str = 'I want to get a million for next 5 years';
let countOfSpace = 0;
for (i = 0; i < str.length; i++) {
if (str[i] === ' ') {
 countOfSpace++;
 }
}

//Найдите количество отрицательных элементов массива.
const arr = [2, -3, 4, 6, -9, 5];
let countNegative = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] < 0) {
 countNegative++;
 }
}

//Найти минимальное значение в массиве.
const arr = [1, 3, 5, 7, 90, 6];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] < min) {
 min = arr[i];
 }
}

//Найдите количество целых чисел в массиве.
const arr = [9, 3, 4.02, 5.91, 7, 8];
let countOfInteger = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 1 === 0) {
 countOfInteger++;
 }
}

//Найдите количество положительных элементов массива.
const arr = [1, 5, -9, 7, -8, 6, -11, 56];
let countPositive = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
 countPositive++;
 }
}

//Найдите количество элементов массива, значение которых меньше 10.
const arr = [1, 5, -8, 9, -6, -2, 4];
let countElementsLessThan10 = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] < 10) {
 countElementsLessThan10++;
 }
}

//Найдите произведение нечетных элементов массива.
const arr = [1, 4, -8, -3, 5, 7, 9];
let productOdd = 1;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 !== 0) {
 productOdd = productOdd * arr[i];
 }
}

//Найти сумму максимального и минимального значений в массиве.
const arr = [12, 5, 9, 6, -2, 7, 8, 0, -3];
let min = arr[0];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] < min) {
 min = arr[i];
 }
if (arr[i] > max) {
 max = arr[i];
 }
}
let sum = max + min;

//Найдите сумму четных элементов массива.
const arr = [1, -5, 8, 6, -3, 4, 9, 13, 78];
let sumEven = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 === 0) {
 sumEven = sumEven + arr[i];
 }
}

//Найдите количество нечетных элементов массива.
const arr = [2, 3, -4, 7, 8, -90, -12, 56];
let countOdd = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 !== 0) {
 countOdd++;
 }
}

//Найти максимальное значение в массиве.
const arr = [14, 79, 5, -9, -2, 56, 88];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
 max = arr[i];
 }
}

//Найдите сумму четных чисел и произведение нечетных чисел от 1 до 20.
let sumOfEven = 0;
let productOfOdd = 1;
for ( let i = 1; i <= 20; i++) {
if  (i % 2 === 0) {
 sumOfEven = sumOfEven + i;
} else {
 productOfOdd = productOfOdd * i;
 }
}

//Найдите количество элементов массива, у которых последняя цифра - 0.
const arr = [1, 33, -8, 45, 67, -2, 99, 89, 23];
let countMultOf10 = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 10 === 0) {
 countMultOf10++;
 }
}

//Найдите количество четных элементов массива.
const arr = [1, 8, 7, -9, 0, 4, 6, -3];
let countEven = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 === 0) {
 countEven++;
 }
}

//Найдите количество букв 'a' в строке.
const str = 'I love the world. Thanks God';
let countOfLetters = 0;
for (let i = 0; i < str.length; i++) {
if (str[i] === 'a') {
 countOfLetters++;
 }
}
