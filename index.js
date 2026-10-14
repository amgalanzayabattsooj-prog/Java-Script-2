// const number = 99;
// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// const age = 22;
// if (age < 0) {
//   console.log("buruu nas");
// } else if (age <= 12) {
//   console.log("huuhed");
// } else if (age <= 17) {
//   console.log("usvur nas");
// } else {
//   console.log("nasand hursen");
// }

// const testScore = 79;
// if (testScore < 0 || testScore > 100) {
//   console.log("buruu onoo");
// } else if (testScore >= 90) {
//   console.log("A");
// } else if (testScore >= 80) {
//   console.log("B");
// } else if (testScore >= 70) {
//   console.log("C");
// } else if (testScore >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// const temperature = 21;
// if (temperature < 0) {
//   console.log("Cold");
// } else if (temperature <= 20) {
//   console.log("Seruun");
// } else if (temperature >= 20) {
//   console.log("Warm");
// }

// const a = 98;
// const b = 98;
// if (a > b) {
//   console.log("Эхний тоо их");
// } else if (b > a) {
//   console.log("Хоёр дахь тоо их");
// } else if (a == b) {
//   console.log("equal");
// }

// const totalPrice = 5000;
// if (totalPrice >= 200000) {
//   console.log("20%");
// } else if (totalPrice >= 100000) {
//   console.log("10%");
// } else if (totalPrice < 100000) {
//   console.log("хямдралгүй");
// } else {
//   console.log(totalPrice);
// }

// const battery = 100;
// if (battery === 0) {
//   console.log("shut down");
// } else if (battery < 20) {
//   console.log("low battery");
// } else if (battery < 100) {
//   console.log("Цэнэг хэвийн");
// } else {
//   console.log("fully charged");
// }

// const color = "red";
// if (color === "red") {
//   console.log("stop");
// } else if (color === "orange") {
//   console.log("wait");
// } else if (color === "green") {
//   console.log("go");
// } else {
//   console.log("wrong color");
// }

// const distance = 100;
// if (distance <= 0) {
//   console.log("wrong distance");
// } else if (distance <= 3) {
//   console.log("3000");
// } else if (distance <= 10) {
//   console.log("5000");
// } else {
//   console.log("8000");
// }

// const secret = 7;
// const guess = 7;
// if (guess < secret) {
//   console.log("Илүү их тоо сонгоорой");
// } else if (guess > secret) {
//   console.log("Илүү бага тоо сонгоорой");
// } else {
//   console.log("chiken dinner");
// }

// const number = 199;
// if (number % 5 === 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// const numberGuess = 100;
// if (numberGuess % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// const numberFizz = 30;
// if (numberFizz % 15 === 0) {
//   console.log("fizzbuzz");
// } else if (numberFizz % 3 === 0) {
//   console.log("fizz");
// } else if (numberFizz % 3 === 0) {
//   console.log("fizz");
// } else {
//   console.log(numberFizz);
// }

// let numberLimit = 50;
// if (numberLimit > 100) {
//   numberLimit = 100;
//   console.log(numberLimit);
// } else {
//   console.log(numberLimit);
// }

// let numberOdd = -100;
// if (numberOdd < 0) {
//   numberOdd = -numberOdd;
// } else {
//   console.log(numberOdd);
// }

// const plate = 6512;
// let lastDigit = plate % 10;
// if (lastDigit === 1 || lastDigit === 6) {
//   console.log("Даваа");
// } else if (lastDigit === 2 || lastDigit === 7) {
//   console.log("Мягмар");
// } else if (lastDigit === 3 || lastDigit === 8) {
//   console.log("Лхагва");
// } else if (lastDigit === 4 || lastDigit === 9) {
//   console.log("Пүрэв");
// } else{
//   console.log("Баасан");
// }

// const day = 5;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("zad shadag udur");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("buruu utga");
// }

// const a = -1;
// const b = 4;
// const c = 5;
// if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// const year = 2004;
// if (year >= 1896 && (year - 1896) % 4 === 0) {
//   console.log("Mon");
// } else {
//   console.log("bish");
// }

// const yearA = 2004;
// if (
//   (yearA >= 1924 && yearA <= 1992 && (yearA - 1924) % 4 === 0) ||
//   (yearA >= 1994 && (yearA - 1994) % 4 === 0)
// ) {
//   console.log("Өвлийн олимпийн жил");
// } else {
//   console.log("Өвлийн олимпийн жил биш");
// }

// const month = 10;
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Өвөл");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Хавар");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Зун");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Намар");
//     break;
//   default:
//     console.log("Буруу сарын дугаар");
// }

// const fuelType = "92";
// const liters = 10;
// switch (fuelType) {
//   case "92":
//     console.log(`Нийт үнэ: ${5500 * liters}₮`);
//     break;
//   case "95":
//     console.log(`Нийт үнэ: ${7000 * liters}₮`);
//     break;
//   case "D":
//     console.log(`Нийт үнэ: ${6000 * liters}₮`);
//     break;
//   default:
//     console.log("Шатахууны төрөл буруу");
// }

// const a = 9;
// const b = 6;
// const c = 2;
// console.log(a > b && b > c);

// const a = 4;
// const b = 4;
// const c = 4;
// console.log(a === b && b === c);

// const a = 2;
// const b = 5;
// const c = 8;
// console.log(a > 0 && b > 0 && c > 0);

// const a = 2;
// const b = 4;
// const c = 8;
// console.log(a % 2 === 0 && b % 2 === 0 && c % 2 === 0);

// const a = 3;
// const b = -1;
// const c = 7;
// console.log(a < 0 || b < 0 || c < 0);


// const number = 90;
// const tens = Math.floor(number / 10);
// const units = number & 10;
// console.log(units * 10 +tens);

// const year = 1900;
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//   console.log("Өндөр жил");
// } else {
//   console.log("Өндөр жил биш");
// }

// const yearThirty = Date.now();
// const msPerDay = 24 * 60 * 60 * 1000;
// const years = Math.floor(yearThirty / (365 * msPerDay));
// let rest = yearThirty % (365 * msPerDay);
// const months = Math.floor(rest / (30 * msPerDay));
// rest %= 30 * msPerDay;
// const days = Math.floor(rest / msPerDay);
// rest %= msPerDay;
// const hours = Math.floor(rest / 3600000);
// rest %= 3600000;
// const minutes = Math.floor(rest / 60000);
// rest %= 60000;
// const seconds = Math.floor(rest / 1000);
// rest %= 1000;
// const dools = Math.floor(rest / 10);
// const ms = rest % 10;
// console.log(years, months, days, hours, minutes, seconds, dools, ms);

// const a = 9;
// const b = 10;
// const c = 7;
// console.log(Math.min(a, b, c));

// const a = 9;
// const b = 10;
// const c = 7;
// console.log(Math.max(a, b, c)-Math.min(a, b, c));

