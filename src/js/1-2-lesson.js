//**
// * Перетворення типів : Числа
// * - явне
// * - неявне
//  */

// //явне
// console.log(Number("5")); //5
// console.log(Number(true)); // 1
// console.log(Number(false));// 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number('Alice')); // NaN
// console.log(Number('25px')); // NaN

// //неявне
// console.log("5" * 2); // 10 (number)
// console.log("10" - 2); // 8 (number)
// console.log(5 + true); // 6 (number)


//**
// * Оператори
// *
// * - Оператори порівняння
// * - Оператори рівності
// * - Приведення типів операндів
//  */

// console.log(5 > 4); // true
// console.log(5 >= "3"); // true
// console.log("2" > "12"); // true // рядки порівнюються посимвольно 2>1, тому true
// console.log("4" == 4); // true // тому що перевіряється через оператор несувор. рівн., цей оператор перевіряє значення але не перевіряє типи
// console.log("5" === 5); // false // сувора рівність, перевіряє і значення і типи
// console.log(1 == true); // true
// console.log(1 === true); // false
// console.log("Alice" < "alice"); // true // символ у нижньому регістрі має більшій юнікод, ніж у верхньому


//***
// * Арифметичні функції 
// *
// * - Number.parseInt
// * - Number.parseFloat
// * - Math
//  */

// let width = "50px";
// // width = Number(width); // NaN
// width = Number.parseInt(width); // 50 //parseInt працює тільки з цілою частиною
// console.log(width);

// let heigth = "200.53px";
// heigth = Number.parseFloat(heigth); // 200.53 // parseFloat працює і з цілою і з десятковою
// console.log(heigth);


//**
//  Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і тд значення змінної value.
// Використовуй методи Math.floor(), Math.ceil(), Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9
// //  */

// const value = 27.5;

// console.log(Math.floor(value)); // округлує число ВНИЗ до найближчого цілого числа
// console.log(Math.ceil(value)); // округлює число ВГОРУ до найближчого цілого числа
// console.log(Math.round(value)); // округлює ЯК ВГОРУ ТАК І ВНИЗ до найближчого цілого числа




//**
// * Функції
// * 
// * -- Оголошення та виклик функції
// * -- Параметри та аргументи
// * -- Повернення значення
//  */

// function add(x, y){
//     // console.log(x, y); //для того щоб код в тілі функції почав працювати, до функції треба звернутися за її імʼям
//     // console.log(x + y); // !!!!!!!!!!!!ПАРАМЕТРИ ФУНКЦІЇ МОЖНА ВИКОРИСТОВУВАТИ ЛИШЕ В ЇЇ ТІЛІ
//     const total = x + y;
//     return total; // припиняє роботу функції і повертає якесь значення назовні, в місце її виклику // дозволяє використовувати отримане значенні будь де ззовні
    
    
// }
// // add(5, 3);
// const a = add(5, 6); 
// console.log(a); // 11

//---------------

// function foo(x, y) {
//     const dayTotal = x * 8 * 1.2;
//     return dayTotal * y;
// }

// const petya = foo(20, 20);
// const alice = foo(20, 15);       
// const yura = foo(15, 21);

// // const petya = 20 * 8 * 20 * 1.2;
// // const alice = 20 * 8 * 15 * 1.2;       /// грн/год * год/день * днів/місяць * премія%
// // const yura = 15 * 8 * 21 * 1.2;
// console.log("petya", petya);
// console.log("alice", alice);
// console.log("yura", yura);



//**
// * ОБЛАСТЬ ВИДИМОСТІ ФУНКЦІЇ
//  */

// const str = "hello"; // змінна, створена в глобальній області, її значення можна отримати в будь якому місці коду

// function foo() {
//     const msg = "world"; // локальна змінна, можна отрмати лише в тій області видимості, у якій вона була створена

//     function lalala() {
//         const a = "lalala";
//         console.log(str); // yes
//         console.log(a); // yes
//         console.log(msg); // yes     
        
//     }
//     lalala();
// }
// foo();
// // !!!!! просто важливо запамʼятати - змінні можуть занурюватися вглиб областей видимості, але не можуть підійматися




//**
// * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. 
// * Для цього потрібно розділити вагу на квадрат висоти.
// *
// * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7,
// * тобто як роздільник дробової частини може бути кома.
// *
// * Індекс маси тіла потрібно округлити до однієї цифри після коми.
//  */

 // function calcBMI(weight, height) {
//     let numWeight = weight.replace(",", "."); // метод replace приймає в себе два аргументи ("символ, який він хоче знайти і замінити", "символ, на який міняє")
//     numWeight = Number.parseFloat(numWeight);
//     console.log(numWeight);
//     const numHeight = Number.parseFloat(height);
//     console.log(numHeight);

//     const bmi = numWeight / (numHeight ** 2);
//     return bmi.toFixed(1); // метод числа, який дозволяє вказати скільки числе має бути після комич
    
// }

// const bmi = calcBMI("88,3", "1.75"); // у цій змінній зберігається результат виклику функції
// console.log(bmi); // тут буде undefined, бо нема return
