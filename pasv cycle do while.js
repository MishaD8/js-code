//Найдите произведение элементов массива
const arr = [3, 4, 7];
let i = 0;
let product = 1;
do { 
product = product * arr[i];
i = i + 1;
} while (i < arr.length);

//Найдите сумму элементов произвольного числового массива
const arr = [3, 4, 7, 9];
let i = 0;
let sum = 0;
do {
 sum = sum + arr[i];
 i = i + 1;
} while (i < arr.length);

//Получить массив [1, 2, 3, 4, 5, 6, 7, 8]
const arr = [];
let i = 0;
do {
i = i + 1;
arr.push(i);
} while (i < 8);

//Получить массив [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
const arr = [];
let i = 0;
do {
i = i + 1;
arr.push(1,0);
} while (i < 5);

//Считаем овец перед сном.
let str = '';
let i = 0;
do {
i = i + 1;
str = str + `${i} sheep...`
} while (i < 30);

//Получить строку "Abc Abc Abc Abc"
let result = '';
let i = 0;
do {
i = i + 1;
result = result + 'Abc ';
} while (i < 4);

//Получить строку "12345"
let result = '';
let i = 0;
do {
i = i + 1;
result = result + i;
} while (i < 5);

//Найдите сумму элементов массива
const arr = [3, 8, 1, 9, 14, -9, -2, 6, 32, 1];
let i = 0;
let sum = 0;
do { 
sum = sum + arr[i];
i = i + 1;
} while (i < arr.length);

//Получить строку "0-0-0-0-0-"
let result = '';
let i = 0;
do {
i = i + 1;
result = result + '0-';
} while (i < 5);

//Секунды до старта
let timer = '';
let i = 10;
do {
timer = timer + `${i} seconds...`
i = i - 1;
} while (i > 1);
timer = timer + '1 second';
