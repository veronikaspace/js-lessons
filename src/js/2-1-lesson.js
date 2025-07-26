//**
// * Розгалуження
// *
// * --- Інструкція if
// * --- Інструкція if...else
// * --- Блок else...if
// * --- Тернарний оператор 
//  */

// console.log("before");

// if (5 > 30) {   // якщо умова в дужках буде true, тоді ми потрапляємо в тіло конструкції if, де виконається код, який там написано
//     console.log("x > y");
    
// } else {
//     console.log("x < y");
    
// }

// console.log("after");


// const sum = 100;

// if (sum >= 100) {
//     console.log("big chocolate");
    
// } else {
//     console.log("small chocolate");
    
// }


//** ----------------------------if else if else
//  */

// const points = 500; // level 1
// const points = 501; // level 2
// const points = 1501; // level 2

// if (points <= 500) {
//     console.log("level 1");
    
// } else if(points > 500) {
//     console.log("level 2");
    
// } else if (points > 1500) {
//     console.log("level 3");
    
// } else {
//     console.log("level 4");
    
// }

// // const points = 500; // level 4
// // const points = 400; // level 3
// // const points = 1000; // level 2
// // const points = 1501; // level 1

// if (points > 1500) {
//     console.log("level 1");
    
// } else if(points > 500) {
//     console.log("level 2");
    
// } else if (points < 500) {
//     console.log("level 3");
    
// } else {
//     console.log("level 4");
    
// }



//** ---------------------------ТЕРНАРНИЙ ОПЕРАТОР */

// const balance = 500;
// // let message;

// // if (balance >= 0) {
// //     message = "Positive";
// // } else {
// //     message = "Negative";
// // }

// const message = balance >= 0 ? "positive" : "negative"; // те, що буде після ? повернеться, якщо умова буде true// те, що після : повернеться якщо умова буде false
// const msg = balance >= 1000 ? "more 1000" : balance >= 500 ? "more 500" : "negative";

// console.log(message);
// console.log(msg);




//** ------------------------------------- 2
//   Блокова область видимості змінних
//  */

// const a = 15;

// if (true) {
//     const b = 10;
// }

// if (true) {
//     const c = 5;
// }



//** -------------------------- 3
// *
// * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.".
// * Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
//  */ 

// const hours = 14;
// const minutes = 26;
// let time;

// // if (minutes > 0) {
// //     time = `${hours} г. ${minutes} хв.`
// // } else {
// //     time = `${hours} г.`
// // }

// //abo 

// const message = minutes > 0 ?
//     `${hours} г. ${minutes} хв.` :
//     `${hours} г.`;
// console.log(message);



//**
// * Напиши скрипт для відображення часу дедлайну здачі проєкту.
// * Використовуй if...else
// *
// * Якщо до дедлайну 0 днів - виведи рядок "Today"
// * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
// * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
// * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
//  */

// const deadline = 10;

// if (deadline === 0) {
//     console.log("Today");
    
// } else if (deadline === 1) {
//     console.log("Tomorrow");
    
// } else if (deadline === 2) {
//     console.log("Overmorrow");
    
// } else {
//     console.log("Date in the future");
    
// }



// ------------------------------- 4

//**
// --- Оператор switch case     // перевірка на сувору рівність
//  */

// const user = 'Alice';

// // switch (user) {     //типу чи user === "якесь значення яке вказано в case" ?
// //     case "Petya":
// //         console.log("case 1");
// //         break;   ///цей оператор потрібен в тому випадку коли кейс співпадає і виконується код який йому відповідає, щоб після його виконання припинити роботу switch case 
// //     case "Alice":
// //         console.log("case 2");
// //         break;
// //     case "Yura":
// //         console.log("case 3");
// //         break;
// //     default:
// //         console.log("default");     
// // }

// // abo
// function foo() {
//     switch (user) {     
//         case "Petya":
//             console.log("case 1");
//             return 1;  
//         case "Alice":
//             console.log("case 2");
//             return 2;  
//         case "Yura":
//             console.log("case 3");
//             return 3;  
//         default:
//             console.log("default");     
//     }
// }

// console.log(foo());



//**
// * 
// * Виконай рефакторинг коду задачі використовуючи switch
// *
// * Якщо до дедлайну 0 днів - виведи рядок "Today"
// * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
// * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
// * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
//  */

// const deadline = 0;

// switch (deadline) {
//     case 0:
//         console.log("Today");
//         break;
//     case 1:
//         console.log("Tomorrow");
//         break;
//     case 2:
//         console.log("Overmorrow");
//         break;
//     default:
//         console.log("Date in the future");
        
    
// }




//**
// * Напиши скрипт вибору опції доставки товару.
// * Опція зберігається у змінній option: 1 - самовивіз, 2 - курʼєр, 3 - пошта
// *
// * У змінну message записати повідомлення залежно від опції
// *  -  "Ви зможете забрати товар завтра з 12:00 у нашому офісі"
// *  -  "Курʼєр доставить замовлення завтра з 9:00 до 18:00"
// *  -  "Посилка буде відправлена сьогодні"
// *  -  "Вам передзвонить менеджер"
//  */

// const option = 1;
// let message = "";

// switch (option) {
//     case 1:
//         message = 'Ви зможете забрати товар завтра з 12:00 у нашому офісі';
//         break;
//     case 2:
//         message = 'Курʼєр доставить замовлення завтра з 9:00 до 18:00';
//         break;
//     case 3:
//         message = 'Посилка буде відправлена сьогодні';
//         break;
//     default:
//         message = 'Вам передзвонить менеджер';
// }

// console.log(message);




//**
// * Логічні оператори
// *
// * - Перетворення типів: логічне
// * - Оператор &&
// * - Оператор ||
// * - Оператор !
// *
//  */

// // явне
// console.log(Boolean(Nan)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false

// console.log(Boolean(3.14)); //true
// console.log(Boolean(-3.14)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean(" ")); // true


// // неявне
// && - перечіпається через першу хибу
// console.log(5 && 4);// 4 // оператор І перевіряє чи всі значення дорівнюють true, якщо всі дорівнюють true він повертає останнє значення, тобто справа
// console.log(null && 3); // null // як тільки оператор натикається на значення яке дорівнює false, одразу повертає це значення

// || - перечіпається через першу істину
// console.log(false || 5); // 5 // оператору АБО потрібно, щоб хоча б один елемент повертав true, якщо такий є, він повертає це значення
// console.log(false || null); // null // якщо обидва false, поверне значення останнього елемента операнда, яке стоїть справа від нього
// console.log(true || 3); // true


// console.log(!false); // true // перетворює значення яке стоїть після ЗАПЕРЕЧЕННЯ в бульовий тип данних а потім інвертує його(робить значення протилежним)
// console.log(!5); // false

// console.log(null || (2 && 3) || 4); // 3




//**-------------------------6
/*
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "free";
// // let canConnect;

// // if (sub === "pro" || sub === "vip") {
// //     canConnect = true;
// // } else {
// //     canConnect = false;
// // }

// // abo 

// // const canConnect = sub === "pro" || sub === "vip" ? true : false;
// //або ще коротше 
// const canConnect = sub === "pro" || sub === "vip";
// console.log(canConnect);




/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnD = true;

// const canOpenChat = isOnline && isFriend && !isDnD; 
// console.log("can open", canOpenChat);







