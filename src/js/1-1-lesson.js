//можна підключати скрипт в тілі а модна в хеді, якщо в хеді, то варто додавати атрибут defer
//наприклад <script type="module" src="./js/1-1-lesson.js" defer></script> (завдяки цьому атрибуту на скрипт файл завантажиться але почне виконуватись лише після того як вся розмітка буде побудована)



/////.   Змінні та типи даних.   //////==1==//////

// const age = 10; 
// // let totalPrice = 200.5;  //може бути перезаписана
// let totalPrice;   //буде присвоєно значення undefined
// // totalPrice = 100.74;

// const userName = 'Alice';
// const message = "hello";
// const isOpen = true;
// const isClose = false;
// let user = null;  // використовується коли треба щось покласти в змінну, але поки що нема що(порожня, але згодом буде повна)
// let product; // відсутність будь чого

// console.log(typeof age); // number
// console.log(typeof message); // string
// console.log(typeof isOpen);  // boolean
// console.log(typeof user);  //object
// console.log(typeof product); //undefined


//////.  Типові помилки    ////==2==///

// console.log(userName);   //error - не можна користуватися змінною до її оголошення, бо код считується згори донизу
// const userName = "Alice";


////.  Арифметичні операції  /////==3==/////

// const x = 10;
// const y = 4;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);

// // console.log(x % y); // 2 //оператор "залишок від ділення" 10 = 4 + 4 + 2 
// console.log(x ** y); // приведення до степеня, тобто 10 в 4 степіні



/**
 * Виведи на екран загальну кількість яблук та винограду.
 * Різницю яблук та винограду.
 */

// const apples = 40;
// const grapes = 130;

// const total = apples + grapes;
// console.log(total);
// console.log(apples - grapes);


//**
// Заміни вираз перевизначення комбінованим оператором.
// 
//  */

// let students = 100;
// // students = students + 20;
// // abo
// students += 20; // комбінований оператор
// console.log(students);


//***
// Пріорітет операторів
//  */

// const result = 100 + 50 - 2 * 5; //
// console.log(result); //140


//**
// Рядки
//  */

// const firstName = 'Alice';
// const lastName = 'Franko';

// // const fullName = firstName + "." + lastName

// // конкатенація
// const fulName = `${firstName} ${lastName}`;
// console.log(fulName);

// const str = "Hello World";
// // console.log(str[8]); // r
// // const strLength = str.length - 1; // 10
// const strLength = str.length; // d
// console.log(str[strLength - 1]);

// let str = "Hello World";
// str[0] = "D" //не вийде перезаписати окремий елемент рядка, бо рядки незмінні 
// str = "lalala"; //лише рядок цілком


//**
// Склади фразу за допомогою шаблонних рядків
// A has B bots in stock, де A, B - змінні вставлені в рядок
//  */

// const companyName = "Boston dynamics";
// const repairBots = 150;
// const defenceBots = 50;

// // const total = repairBots + defenceBots;
// const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`; //синтаксис інтерполяції
// console.log(msg);


//**
// Перетворення типів: Рядки
//  */

// явне
// console.log(String(5));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// //неявне
// console.log("5" + 3); // 53 //конкатенація (злиття)
// console.log("5" + true); // 5true
// console.log("5" + null); // 5null
// console.log(100 + 2 + "30"); //10230 (рядок)
