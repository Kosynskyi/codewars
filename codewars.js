// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints);

//     const averagePoints =
//       classPoints.reduce((acc, point) => acc + point, 0) / classPoints.length;
//     console.log(averagePoints);
//     const result = averagePoints < yourPoints ? true : false;
//     return result;
//   }

//   console.log(betterThanAverage([2, 3], 5));
// -------------------------------------------------------------------------------------
// function areYouPlayingBanjo(name) {

//   if (name[0].toLowerCase() === "r") {
//     return `${name} plays banjo`;
//   } else {
//     return `${name} does not play banjo`;
//   }

// }

// console.log(areYouPlayingBanjo("Roman"));
// -------------------------------------------------------------------------------------
// function countBy(x, n) {
//   let z = [];

//   const multiply = x * n;
//   console.log(multiply);

//   for (let i = x; i <= multiply; i += 1) {
//     if (i % x === 0) {
//       z.push(i);
//     }
//   }

//   return z;
// }

// console.log(countBy(1, 8)); //[1,2,3,4,5,6,7,8]
// console.log(countBy(2, 5)); //[2,4,6,8,10]
// -------------------------------------------------------------------------------------
// function digitize(n) {
//   const arr = [];
//   const str = ("" + n).split("").forEach((elem) => arr.push(Number(elem)));
//   return arr.reverse();

//   //   або
// //  return ("" + n).split("").map(Number).reverse();
// }

// console.log(digitize(348597)); // [7,9,5,8,4,3]
// -------------------------------------------------------------------------------------
// function paperwork(n, m) {
//   //   if (n > 0 && m > 0) {
//   //     return n * m;
//   //   } else {
//   //     return 0;
//   //   }

//   return n > 0 && m > 0 ? n * m : 0;
// }

// console.log(paperwork(5, 5)); //25
// console.log(paperwork(-5, 5)); //0
// -------------------------------------------------------------------------------------
// function noSpace(x) {
//   return x
//     .split(" ")
//     .filter((elem) => elem !== "")
//     .join("");
// }
// console.log(noSpace("reger wer we fwe rwer e "));//"regerwerwefwerwere"
// -------------------------------------------------------------------------------------
// function solution(str) {
//   return str.split("").reverse().join("");
// aбо
// return [...str].reverse().join("");
// }

// console.log(solution("world")); //"dlrow"
// -------------------------------------------------------------------------------------
// function getGrade(s1, s2, s3) {
//   const averageScore = (s1 + s2 + s3) / 3;
//   let message;

//   if (averageScore >= 90 && averageScore <= 100) {
//     message = "A";
//   } else if (averageScore >= 80) {
//     message = "B";
//   } else if (averageScore >= 70) {
//     message = "C";
//   } else if (averageScore >= 60) {
//     message = "D";
//   } else {
//     message = "F";
//   }
//   return message;
// }

// console.log(getGrade(70, 90, 93)); //"A"
// -------------------------------------------------------------------------------------
// const summation = function (num) {
//   let sum = 0;

//   for (let i = 0; i <= num; i += 1) {
//     sum += i;
//   }

//   return sum;
// };

// console.log(summation(8)); //36
// -------------------------------------------------------------------------------------
// const min = function (list) {
//   return Math.min(...list);
// };

// const max = function (list) {
//   return Math.max(...list);
// };
// оптимізоване рішення
// const min = (list) => Math.min(...list);

// const max = (list) => Math.max(...list);

// console.log(min([-52, 56, 30, 29, -54, 0, -110])); //-110
// console.log(max([-52, 56, 30, 29, -54, 0, -110])); //56
// -------------------------------------------------------------------------------------
// function makeUpperCase(str) {
//   return str.toUpperCase();
// }
// оптимізація
// const makeUpperCase = (str) => str.toUpperCase();
// console.log(makeUpperCase("kajglak")); //KAJGLAK
// -------------------------------------------------------------------------------------
// const boolToWord = (bool) => (bool ? "Yes" : "No");

// console.log(boolToWord("fdhf")); //"Yes"
// -------------------------------------------------------------------------------------
// const makeNegative = (num) => (num > 0 ? num * -1 : num);

// console.log(makeNegative(-2));
// -------------------------------------------------------------------------------------
// function validatePIN(pin) {
//   const regExpPin =
//     /^\d[0-9]+$/.test(pin) && (pin.length === 4 || pin.length === 6);
//   return regExpPin;
// або
// const reg = new RegExp("^([0-9]{4}|[0-9]{6})$");
// return reg.test(pin)
//   або
// const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)
// }

// console.log(validatePIN("144011"));
// -------------------------------------------------------------------------------------
// function numberToString(num) {
//   return num + "";
// або
// return num.toString();
// або
// return String(num);
// }
// console.log(numberToString(10)); //"10"
// -------------------------------------------------------------------------------------
// function even_or_odd(number) {
//     return (number % 2 === 0) ? "Even" : "Odd";
// }
// -------------------------------------------------------------------------------------
// function positiveSum(arr) {
//   //   let total = 0;
//   //   arr.forEach((number) => {
//   //     if (number >= 0) {
//   //       total += number;
//   //     }
//   //   });
//   //   return total;
//   // або
// //   return arr.reduce((acc, num) => acc + (num >= 0 ? num : 0), 0);
// }

// console.log(positiveSum([1, -4, 7, 12]));// 20
// -------------------------------------------------------------------------------------
// function basicOp(operation, value1, value2) {
//   let total = 0;
//   if (operation === "+") {
//     total = value1 + value2;
//   } else if (operation === "-") {
//     total = value1 - value2;
//   } else if (operation === "*") {
//     total = value1 * value2;
//   } else if (operation === "/") {
//     total = value1 / value2;
//   } else {
//     return "Вы ввели некорректную операцию";
//   }
//   return total;
// }

// console.log(basicOp("+", 10, 5));
// -------------------------------------------------------------------------------------
// function find_average(array) {
//   //   const sum = array.reduce((acc, num) => acc + num, 0);
//   //   const result = array.length !== 0 ? sum / array.length : 0;
//   //   return result;
//   // або
// //   return array.length !== 0
// //     ? array.reduce((acc, num) => acc + num, 0) / array.length
// //     : 0;
// або
// return array.length > 0
//   ? array.reduce((acc, num) => acc + num, 0) / array.length
//   : 0;
// }
// console.log(find_average([])); //0
// -------------------------------------------------------------------------------------
// function getCount(str) {
//   const arr = [...str];
//   const volowelsArr = [];
//   for (const item of arr) {
//     if (item === "a") {
//       volowelsArr.push(item);
//     } else if (item === "e") {
//       volowelsArr.push(item);
//     } else if (item === "i") {
//       volowelsArr.push(item);
//     } else if (item === "o") {
//       volowelsArr.push(item);
//     } else if (item === "u") {
//       volowelsArr.push(item);
//     }
//     // console.log(arr);
//   }
//   const result = volowelsArr.length;
//   return result;
// АБО
//   return (str.match(/[aeiou]/gi) || []).length;
// }
// console.log(getCount("abreia"));//4
// -------------------------------------------------------------------------------------
// function DNAStrand(dna) {
//   const arrDna = [];

//   for (const item of dna) {
//     if (item.toUpperCase() === "A") {
//       arrDna.push("T");
//     } else if (item.toUpperCase() === "T") {
//       arrDna.push("A");
//     } else if (item.toUpperCase() === "G") {
//       arrDna.push("C");
//     } else if (item.toUpperCase() === "C") {
//       arrDna.push("G");
//     }
//   }
//   return arrDna.join("");
// або
//   return dna
//     .replace(/A/g, "t")
//     .replace(/T/g, "a")
//     .replace(/C/g, "g")
//     .replace(/G/g, "c")
//     .toUpperCase();
// }
// console.log(DNAStrand("AAAA")); //"TAACG"
// -------------------------------------------------------------------------------------
// function XO(str) {
// const x = [];
// const o = [];
// for (const item of str) {
//   console.log(item);
//   if (item.toUpperCase() === "X") {
//     x.push(item);
//   } else if (item.toUpperCase() === "O") {
//     o.push(item);
//   }
// }
// if (x.length === o.length) {
//   return true;
// } else {
//   return false;
// }
// або
// return (str.match(/X/gi) || []).length === (str.match(/O/gi) || []).length;
// }
// console.log(XO("xx"));
// -------------------------------------------------------------------------------------
// function getMiddle(s) {
// if (s.length % 2 === 0) {
//   return s.slice(s.length / 2 - 1, s.length / 2 + 1);
// } else if (s.length % 2 !== 0) {
//   return s.slice(Math.floor(s.length / 2), Math.ceil(s.length / 2));
// } else if (s.length % 2 < 1) {
//   return s;
// }
// або
// return s.slice((s.length - 1) / 2, s.length / 2 + 1);

// }
// console.log(getMiddle("ting")); //in
// -------------------------------------------------------------------------------------
// function opposite(number) {
//   return number * -1;
// }
// console.log(opposite(10));//-10
// -------------------------------------------------------------------------------------
// const greet = () => "hello world!"
// -------------------------------------------------------------------------------------
// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }
// console.log(reverseWords("This is an example!"));
// -------------------------------------------------------------------------------------
// const stringToFunction = (str) => Number(str);
// console.log(stringToFunction("1234"));//1234
// -------------------------------------------------------------------------------------
// ----------------------НЕ ЗРОБИВ----------------------
// function nbYear(p0, percent, aug, p) {
//   for (var i = 0; p0 < p; i += 1) {
//     p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
//   }
//   return i;
// }
// console.log(nbYear(1500, 5, 100, 5000));
// -------------------------------------------------------------------------------------
// function longest(s1, s2) {
//   const newString = [...s1, ...s2]
//     .filter((symbol, index, newString) => newString.indexOf(symbol) === index)
//     .sort((a, b) => a.localeCompare(b))
//     .join("");

//   console.log(newString);
// }
// console.log(longest("aeeeeehhrrstyy", "aehrsty")); //aehrsty
// -------------------------------------------------------------------------------------
// function sumArray(array) {
// let result;
// if (array) {
//   const deleteMin = array.sort((a, b) => a - b).splice(0, 1);
//   const deleteMax = array.splice(array.length - 1, 1);
//   result = array.reduce((acc, num) => acc + num, 0);
// } else {
//   result = 0;
// }
// return result;
// або
// return array
//   ? array
//       .sort((a, b) => a - b)
//       .slice(1, -1)
//       .reduce((acc, num) => acc + num, 0)
//   : 0;
// }
// console.log(sumArray(null));
// -------------------------------------------------------------------------------------
// const sumMix = (x) => x.reduce((acc, sum) => acc + Number(sum), 0);
// console.log(sumMix([9, 3, "7", "3"])); //22
// -------------------------------------------------------------------------------------
// function oddOrEven(array) {
//   const sum = array.reduce((acc, num) => acc + num, 0);
//   console.log(sum);
//   return sum % 2 === 0 ? "even" : "odd";
// }
// console.log(oddOrEven([0, 1, 5])); // "even"
// -------------------------------------------------------------------------------------
// function disemvowel(str) {
//   const regExp = str.replace(/[aeiou]/gi, "");
//   return regExp;
// }
// console.log(disemvowel("This website is for losers LOL!"));
// -------------------------------------------------------------------------------------
// function getSum(a, b) {
// let sum = 0;
// if (a <= b) {
//   for (let i = a; i <= b; i += 1) {
//     sum += i;
//   }
// } else {
//   for (let i = b; i <= a; i += 1) {
//     sum += i;
//   }
// }
// return sum;
// або
//  Math.abs - повертає число по модулю
// return ((a + b) * (Math.abs(a - b) + 1)) / 2;
// }

// console.log(getSum(3, 1)); //6
// -------------------------------------------------------------------------------------
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }
// console.log(rowSumOddNumbers(3)); //27
// -------------------------------------------------------------------------------------
// const number = (busStops) => {
//   const totalArr = busStops.flatMap((arr) => arr);
//   let sum = 0;

//   for (let i = 0; i < totalArr.length; i += 1) {
//     sum = i % 2 === 0 ? (sum += totalArr[i]) : (sum -= totalArr[i]);
//   }
//   return sum;
// або
// return busStops.reduce((acc, [on, off]) => acc + on - off, 0);
// };

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// ); //5
// -------------------------------------------------------------------------------------
// function countPositivesSumNegatives(input) {
// let result = [];

// if (input == null || input.length < 1) {
//   return [];
// }
// const positiveLength = input.filter((num) => num > 0).length;
// const negativeSum = input.reduce((acc, num) => acc + (num < 0 ? num : 0), 0);

// if ((positiveLength && negativeSum !== 0) || null) {
//   result.push(positiveLength, negativeSum);
// }
// result.push(positiveLength, negativeSum);
// return result;
// або
//   return input && input.length
//     ? [
//         input.filter((num) => num > 0).length,
//         input.filter((num) => num < 0).reduce((acc, num) => acc + num, 0),
//       ]
//     : [];
// }
// console.log(
//   countPositivesSumNegatives([
//     0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
//   ])
// ); //[8, 50]
// console.log(countPositivesSumNegatives(null));// []
// -------------------------------------------------------------------------------------
// function isValidWalk(walk) {
//   console.log(walk);
//   const n = walk.filter((elem) => elem === "n").length;
//   const s = walk.filter((elem) => elem === "s").length;
//   const w = walk.filter((elem) => elem === "w").length;
//   const e = walk.filter((elem) => elem === "e").length;

//   return n === s && w === e && walk.length === 10 ? true : false;
// }
// console.log(isValidWalk(["w", "e", "s", "n", "w", "e", "s", "n", "s", "n"])); // true
// -------------------------------------------------------------------------------------
// function bouncingBall(h, bounce, window) {
// if (h <= 0 || window >= h || bounce >= 1 || bounce <= 0) {
//   return -1;
// }
// let result = 1;
// while ((h *= bounce) > window) {
//   result += 2;
// }
// return result;
// або
//   if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
//     return -1;
//   }
//   let result = 0;
//   const bounceHeigth = bounce * h;

//   if (bounceHeigth > window) {
//     result += 2 + bouncingBall(bounceHeigth, bounce, window);
//   } else {
//     result += 1;
//   }
//   return result;
// }
// console.log(bouncingBall(30, 0.66, 1.5)); //15
// -------------------------------------------------------------------------------------
// function digPow(n, p) {
//   const arrOfStr = String(n)
//     .split("")
//     .map((item) => parseInt(item));

//   let arrPow = [];

//   for (let i = 0; i < arrOfStr.length; i += 1) {
//     arrPow.push(Math.pow(arrOfStr[i], p + i));
//   }

//   const sumOfArr = arrPow.reduce((acc, num) => acc + num, 0);
//   return Number.isInteger(sumOfArr / n) ? sumOfArr / n : -1;
// }
// console.log(digPow(92, 1)); //-1
// console.log(digPow(695, 2)); //2
// console.log(digPow(46288, 3)); //2360688
// -------------------------------------------------------------------------------------
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

// const a = new SmallestIntegerFinder();
// console.log(a.findSmallestInt([32, -10, -100, 55])); //-100
// -------------------------------------------------------------------------------------
// ?????????????????????????????????????????????????????????????????????????????????????
// String.prototype.toJadenCase = function () {
//   const n = this.split(" ");

//   let arr = [];
//   for (const word of n) {
//     arr.push(word[0].toUpperCase() + word.slice(1));
//   }
//   console.log(arr.join(" "));
// };
// console.log(
//   this.toJadenCase("how can mirrors be real if our eyes aren't real")
// ); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
// -------------------------------------------------------------------------------------
// function removeChar(str) {
//   return str.slice(1, str.length - 1);
// }
// console.log(removeChar("JavaScript")); //avaScrip
// -------------------------------------------------------------------------------------
// function simpleMultiplication(number) {
//   //   if (number % 2 === 0) {
//   //     return number * 8;
//   //   } else {
//   //     return number * 9;
//   //   }
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(3));//27
// console.log(simpleMultiplication(2));//16
// -------------------------------------------------------------------------------------
// You were camping with your friends far away from home, but when it's time to go back,
// you realize that your fuel is running out and the nearest pump is 50 miles away!
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return mpg * fuelLeft >= distanceToPump ? true : false;
// };
// console.log(zeroFuel(50, 25, 2));//true
// console.log(zeroFuel(100, 50, 1));//false
// -------------------------------------------------------------------------------------
// function findOdd(A) {
//   let numbersGroup = {};

//   for (let number of A) {
//     // console.log('numbersGroup[number] ', numbersGroup[number]);
//     // console.log(number);
//     if (numbersGroup[number] === undefined) {
//       numbersGroup[number] = 1;
//     } else {
//       numbersGroup[number] += 1;
//     }
//   }
//   return numbersGroup;
// }

// const qwe = {
//   a: 9,
//   b: 8,
//   c: 7,
// };
// console.log(qwe['a']); //9

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 3, 2, 2, 1, 4])); //{1: 2, 2: 4, 3: 6, 4: 1}
// console.log(findOdd([7])); //{7: 1}
// console.log(findOdd([1, 1, 2])); //{1: 2, 2: 1}
// -------------------------------------------------------------------------------------

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// function findOdd(A) {
//   let count = 0;
//   for (let i = 0; i < A.length; i += 1) {
//     for (let j = 0; j < A.length; j += 1) {
//       if (A[i] === A[j]) {
//         count += 1;
//       }
//     }
//     if (count % 2 != 0) {
//       return A[i];
//     }
//   }
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 3, 2, 2, 1, 4])); //3
// console.log(findOdd([7])); //7
// console.log(findOdd([1, 1, 2])); //2
// -------------------------------------------------------------------------------------
// function stringToArray(string) {
//   return string.split(" ");
// }

// console.log(stringToArray("I love arrays they are my favorite")); //["I", "love", "arrays", "they", "are", "my", "favorite"]

// -------------------------------------------------------------------------------------
// function expandedForm(num) {
//   const res = [];
//   const arr = String(num).split("").reverse();

//   for (let i = 0; i < arr.length; i += 1) {
//     if (Number(arr[i]) === 0) {
//       continue;
//     }
//     res.push(arr[i] * Math.pow(10, i));
//   }
//   return res.reverse().join(" + ");
// }

// console.log(expandedForm(42)); //'40 + 2'
// console.log(expandedForm(513)); //'500 + 10 + 3'
// console.log(expandedForm(70304)); //'70000 + 300 + 4'

// // краще рішення на codewars!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// -------------------------------------------------------------------------------------
// function isIsogram(str) {
//   const arr = str.toLowerCase();
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i] !== arr[j]) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isIsogram('Dermatoglyphics')); //true
// console.log(isIsogram('aba')); //false
// console.log(isIsogram('moOse')); //false
// console.log(isIsogram('abc')); //true

// // краще рішення на codewars
// function isIsogram(str) {
//   console.log(new Set(str.toLowerCase()));
//   console.log(new Set(str.toLowerCase()).size);
//   console.log(str.length);

//   return new Set(str.toUpperCase()).size === str.length;
// }
// // tests
// console.log(isIsogram('Dermatoglyphics')); //true
// console.log(isIsogram('aba')); //false
// console.log(isIsogram('moOse')); //false
// console.log(isIsogram('abc')); //true
// -------------------------------------------------------------------------------------
// function DNAtoRNA(dna) {
//   const arr = dna.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'T') {
//       arr[i] = 'U';
//     }
//   }
//   return arr.join('');
// }

// круті рішення з codewars
// function DNAtoRNA(dna) {
//   return dna.replace(/T/g, 'U');
// }
// function DNAtoRNA(dna) {
//   console.log(dna.split('T'));
//   console.log(dna.split('T').join('U'));
//   //   return dna.split('T').join('U');
// }

// //   tests
// console.log(DNAtoRNA('TTTT')); //"UUUU"
// console.log(DNAtoRNA('GCAT')); //"GCAU"
// -------------------------------------------------------------------------------------
// function invert(array) {
//   return array.map(item => item * -1);
// }

// console.log(invert([1, 2, 3, 4, 5])); //[-1,-2,-3,-4,-5]
// console.log(invert([1, -2, 3, -4, 5])); //[-1,2,-3,4,-5]
// -------------------------------------------------------------------------------------
// function setAlarm(employed, vacation) {
//   return employed === true && vacation === false ? true : false;
// }
// круте рішення з codewars
// function setAlarm(employed, vacation){
//     return (employed && !vacation) ? true : false;
//   }
// console.log(setAlarm(true, true)); //false
// console.log(setAlarm(false, true)); // false
// console.log(setAlarm(true, false)); // true
// -------------------------------------------------------------------------------------
// function abbrevName(name) {
//   const arr = name.split(' ');
//   return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
// }
// console.log(abbrevName('Sam Harris')); // "S.H"
// console.log(abbrevName('Patrick Feenan')); // "P.F"
// -------------------------------------------------------------------------------------
// const areaOrPerimeter = function (l, w) {
//   return l === w ? l * w : (l + w) * 2;
// };
// console.log(areaOrPerimeter(3, 3)); //  9
// console.log(areaOrPerimeter(6, 10)); // 32
// -------------------------------------------------------------------------------------
// function points(games) {
//   let total = 0;
//   for (let i = 0; i < games.length; i += 1) {
//     if (games[i][0] > games[i][2]) {
//       total += 3;
//     } else if (games[i][0] === games[i][2]) {
//       total += 1;
//     }
//   }
//   return total;
// }

// console.log(
//   points([
//     '1:0',
//     '2:0',
//     '3:0',
//     '4:0',
//     '2:1',
//     '3:1',
//     '4:1',
//     '3:2',
//     '4:2',
//     '4:3',
//   ]),
// ); // 30);
// console.log(
//   points([
//     '1:1',
//     '2:2',
//     '3:3',
//     '4:4',
//     '2:2',
//     '3:3',
//     '4:4',
//     '3:3',
//     '4:4',
//     '4:4',
//   ]),
// ); // 10);
// console.log(
//   points([
//     '0:1',
//     '0:2',
//     '0:3',
//     '0:4',
//     '1:2',
//     '1:3',
//     '1:4',
//     '2:3',
//     '2:4',
//     '3:4',
//   ]),
// ); // 0);
// -------------------------------------------------------------------------------------
// var number = function (array) {
//   return array.map((item, index) => {
//     return `${index + 1}: ${item}`;
//   });
// };
// console.log(number([])); //[], 'Empty array should return empty array');
// console.log(number(['a', 'b', 'c'])); //["1: a", "2: b", "3: c"], 'Return the correct line numbers')
// -------------------------------------------------------------------------------------
// var isSquare = function (n) {
//   if (n === 0) {
//     return true;
//   }

//   return n % Math.sqrt(n) === 0 ? true : false;
// };
// краще рішення на codewars

// var isSquare = function(n){
//     return Math.sqrt(n) % 1 === 0 ? true : false;
//   };

// tests
// console.log(isSquare(3)); // false, "3 is not a square number");
// console.log(isSquare(4)); // true, "4 is a square number (2 * 2)");
// console.log(isSquare(0)); // "0 is a square number (0 * 0)");
// -------------------------------------------------------------------------------------

// ==========================НЕ ВИРІШИВ!!!!!!!!!!!!!!!!!!===============================
// function queueTime(customers, n) {
//   console.log('customers.length ', customers.length);
//   const totalClients = customers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
//   console.log('totalClients ', totalClients);
//   if (totalClients < n) {
//     return customers.length;
//   }
//   return totalClients / n;
//   return totalClients < n ? customers.length : totalClients / n;
// }
// !!!!!!!!!!!!!ПРАВИЛЬНЕ РІШЕННЯ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//
// function queueTime(customers, n) {
//   // creates an array of length n representing the tills
//   // Each till is given a value of 0 to represent initial waitTime before the queue begins.
//   const tills = new Array(n).fill(0);
//   console.log(tills);
//   // goes through the queue of customer waitTimes
//   for (let waitTime of customers) {
//     // finds the till with the least wait time on it, adds the next customer's time to it
//     console.log(Math.min(...tills));
//     const lowestWaitTill = tills.indexOf(Math.min(...tills));
//     tills[lowestWaitTill] += waitTime;
//   }
//   // end result is that the waitTimes (load) on the tills are distributed optimally.
//   // The waitTime of the till with the heaviest load represents the total time taken
//   return Math.max(...tills);
// }
// console.log((queueTime([], 1)))//, 0);
// console.log(queueTime([1, 2, 3, 4], 1)); //, 10);
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //, 9);
// console.log(queueTime([1, 2, 3, 4, 5], 100)); //, 5);
// console.log(
//   queueTime(
//     [
//       31, 48, 17, 3, 1, 10, 16, 40, 27, 3, 14, 2, 19, 25, 21, 14, 46, 35, 4, 28,
//       14, 13, 26, 30, 13,
//     ],
//     4,
//   ),
// ); //, 136);
// -------------------------------------------------------------------------------------
// const otherAngle = (a, b) => 180 - a - b;

// console.log(otherAngle(30, 60)); // 90);
// console.log(otherAngle(60, 60)); // 60);
// console.log(otherAngle(43, 78)); // 59);
// -------------------------------------------------------------------------------------
// const count = string => {
//   const arrOfString = string.split('').reduce((acc, letter) => {
//     acc[letter] ? (acc[letter] += 1) : (acc[letter] = 1);

//     // if (acc[letter]) {
//     //   acc[letter] += 1;
//     // } else {
//     //   acc[letter] = 1;
//     // }
//     return acc;
//   }, {});
//   return arrOfString;
// };

// console.log(count('aba')); //{ a: 2, b: 1 };
// console.log(count('')); //{}
// -------------------------------------------------------------------------------------
// const smash = words => words.join(' ');

// console.log(smash(['hello', 'world'])); //, "hello world"
// console.log(smash(['hello', 'amazing', 'world'])); //, "hello amazing world"
// -------------------------------------------------------------------------------------
// const updateLight = current => {
//   if (current === 'green') {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   } else {
//     return 'green';
//   }
// };
// =======================коротше рішення з codewars========================
// const updateLight = current =>
//   ({ green: `yellow`, yellow: `red`, red: `green` }[current]);

// console.log(updateLight('green')); //, "yellow"
// console.log(updateLight('yellow')); //, "red"
// console.log(updateLight('red')); //, "green"
// -------------------------------------------------------------------------------------
// const hero = (bullets, dragons) => (bullets >= dragons * 2 ? true : false);
// console.log(hero(10, 5)); //, true);
// console.log(hero(7, 4)); //, false);
// -------------------------------------------------------------------------------------
// const reverseSeq = n => {
//   const arr = [];

//   for (let i = n; i >= 1; i -= 1) {
//     arr.push(i);
//   }

//   return arr;
// };
// console.log(reverseSeq(5)); //, [5, 4, 3, 2, 1])
// -------------------------------------------------------------------------------------
// const alphabetPosition = text => {
//   const alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];

//   const arrOfText = text.toLowerCase().split('');
//   const result = [];

//   for (let i = 0; i < arrOfText.length; i += 1) {
//     for (let j = 0; j < alphabet.length; j += 1) {
//       if (alphabet[j] === arrOfText[i]) {
//         result.push(j + 1);
//       }
//     }
//   }
//   return result.join(' ');
// };
//======================краще рішення на codewars============================
// function alphabetPosition(text) {
//     const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(x => alphabet.indexOf(x)+1).join(' ');
//   }

// console.log(alphabetPosition('JavaScript')); // "10 1 22 1 19 3 18 9 16 20"
// console.log(alphabetPosition('I love JavaScript')); // "9 12 15 22 5 10 1 22 1 19 3 18 9 16 20"
// console.log(alphabetPosition('The narwhal bacons at midnight.')); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
// const sumTwoSmallestNumbers = numbers => {
//   const sortedArr = numbers.sort((a, b) => a - b);
//   return sortedArr[0] + sortedArr[1];
// };

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
// -------------------------------------------------------------------------------------

// const minMax = arr => {
//   const sortedArr = [...arr].sort((a, b) => a - b);
//   return [sortedArr[0], sortedArr[sortedArr.length - 1]];
// };

// console.log(minMax([1, 2, 3, 4, 5])); //[1, 5]
// console.log(minMax([1])); //[1]
// console.log(minMax([2334454, 5])); //[ 5, 2334454 ]
// -------------------------------------------------------------------------------------
// const high = x => {
//   const alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];

//   const arrFromString = x.split(' ');
//   const arrNumbersFromString = [];
//   //   console.log('arrFromString ', arrFromString);

//   for (let i = 0; i < arrFromString.length; i += 1) {
//     const sumOfElement = arrFromString[i]
//       .replace(/[^a-z]/, '')
//       .split('')
//       .map(x => alphabet.indexOf(x) + 1)
//       .reduce((acc, item) => (acc += item), 0);
//     // console.log(sumOfElement);
//     arrNumbersFromString.push(sumOfElement);
//   }
//   //   console.log('Math.max ', Math.max(...arrNumbersFromString));
//   const indexOfMaxSum = arrNumbersFromString.indexOf(
//     Math.max(...arrNumbersFromString),
//   );
//   return arrFromString[indexOfMaxSum];
// };
//======================коротше рішення на codewars============================

// function high(x){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'
//     const words = x.split(' ')
//     const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))

//     return words[scores.indexOf(Math.max(...scores))]
//   }

// console.log(high('aaa b')); //, 'aaa'
// console.log(high('what time are we climbing up the volcano')); //, 'volcano'
// -------------------------------------------------------------------------------------
// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }

// console.log(Kata.getVolumeOfCuboid(1, 2, 2)); //  4
// console.log(Kata.getVolumeOfCuboid(6, 2, 5)); // 60
// -------------------------------------------------------------------------------------
// const greet = (...args) => (args[0] === args[1] ? 'Hello boss' : 'Hello guest');
// console.log(greet('Daniel', 'Daniel')); // 'Hello boss'
// console.log(greet('Greg', 'Daniel')); // 'Hello guest'
// -------------------------------------------------------------------------------------

// const greetingObj = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso',
// };

// const greet = language => {
//   const lang = Object.keys(greetingObj);
//   const greetingValues = Object.values(greetingObj);
//   const idx = lang.indexOf(language);
//   return lang.includes(language) ? greetingValues[idx] : 'Welcome';
//======================коротше рішення на codewars============================
//// return greetingObj[language] || 'Welcome';
// };

// console.log(greet('english')); // 'Welcome', "Your function should have returned 'Welcome'. Try again.");
// console.log(greet('dutch')); // 'Welkom', "Your function should have returned 'Welkom'. Try again.");
// console.log(greet('IP_ADDRESS_INVALID')); // 'Welcome', "Your function should have returned 'Welcome'. Try again.");
// -------------------------------------------------------------------------------------
// const enough = (cap, on, wait) => (cap >= on + wait ? 0 : on + wait - cap);

// console.log(enough(20, 5, 5)); // 0
// console.log(enough(67, 12, 75)); // 20
// -------------------------------------------------------------------------------------
// const countSheep = num => {
//   const arr = [];
//   for (let i = 0; i < num; i += 1) {
//     arr.push(`${i + 1} sheep...`);
//   }
//   return arr.join('');
// };

// console.log(countSheep(0)); //, ""
// console.log(countSheep(1)); //, "1 sheep..."
// console.log(countSheep(2)); //, "1 sheep...2 sheep..."
// -------------------------------------------------------------------------------------
//======================ТЯЖКА БУЛА...ВКРАЛА ГОДИН 3============================
// const order = words => {
//   const wordsArr = words.split(' ');
//   const numbersFromString = words.replace(/\D/g, '').split('');
//   // console.log('wordsArr ', wordsArr);
//   const arr = [];

//   for (let i = 0; i < numbersFromString.length; i += 1) {
//     // console.log(qwe[i] + wordsArr[i]);
//     arr.push(numbersFromString[i] + wordsArr[i]);
//   }
//   // console.log(a);
//   const result = [...arr]
//     .sort((a, b) => a.localeCompare(b))
//     .map(item => item.slice(1))
//     .join(' ');
//   // console.log('b ', b);

//   return result;
// };

//======================краще рішення на codewars============================
// function order(words) {
//   return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
// }
//======================краще рішення на codewars============================
// function order(words) {
//   return words.split(" ").sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, "")).join(" ")
// }
//======================краще рішення на codewars============================
// function order(words){
//   return words && words.split(' ')
//     .map(word => word.match(/\d/) + word)
//     .sort()
//     .map(word => word.slice(1))
//     .join(' ');
// }

// console.log(order('is2 Thi1s T4est 3a')); //, "Thi1s is2 3a T4est")
// console.log(order('4of Fo1r pe6ople g3ood th5e the2')); //, "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order('')); //, "", "empty input should return empty string" )
// -------------------------------------------------------------------------------------
// const firstMissingNonConsecutive = arr => {
//   const reversedArr = arr.reverse();
//   for (let i = 0; i < reversedArr.length; i += 1) {
//     if (reversedArr[i] - reversedArr[i + 1] === 1) {
//       continue;
//     }
//     return reversedArr[i] - 1;
//   }
// };

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 5
// ---------------------------------------!!----------------------------------------------
// const firstNonConsecutive = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] - arr[i + 1] === -1) {
//       continue;
//     }
//     return arr[i] === arr[arr.length - 1] ? null : arr[i + 1];
//   }
// };
//======================краще рішення на codewars============================

// function firstNonConsecutive(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] - arr[0] !== i) {
//       return arr[i];
//     }
//   }
//   return null;
// }
//======================краще рішення на codewars============================
// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
//   return null;
// }
// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
// console.log(firstNonConsecutive([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6])); // null
// console.log(firstNonConsecutive([1, 2, 3, 4])); // null
// console.log(firstNonConsecutive([2, 3, 4, 6, 8, 9, 10, 11])); // 6
// -------------------------------------------------------------------------------------
// const greet = name => `Hello, ${name} how are you doing today?`;

// console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
// -------------------------------------------------------------------------------------
//======================5 kyu ranked up============================
// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
//   laLigaGoals + copaDelReyGoals + championsLeagueGoals;

// console.log(goals(0, 0, 0)); // 0
// console.log(goals(43, 10, 5)); // 58
// -------------------------------------------------------------------------------------
// const bmi = (weight, height) => {
//   const bmi = weight / Math.pow(height, 2);
//   if (bmi <= 18.5) {
//     return 'Underweight';
//   } else if (bmi <= 25) {
//     return 'Normal';
//   } else if (bmi <= 30) {
//     return 'Overweight';
//   } else {
//     return 'Obese';
//   }
// };
// console.log(bmi(80, 1.8)); //"Normal"
// -------------------------------------------------------------------------------------
// const check = (a, x) => (a.includes(x) ? true : false);

// console.log(check(['t', 'e', 's', 't'], 'e')); // true
// console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false
// -------------------------------------------------------------------------------------
// const findShort = s => {
//   const arr = s.split(' ');
//   const short = [arr[0]];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (short[0].length > arr[i].length) {
//       short.splice(0, 1, arr[i]);
//     }
//   }
//   return short[0].length;
// };

//======================краще рішення============================
// const findShort = s => Math.min(...s.split(' ').map(item => item.length));

// console.log(
//   findShort(
//     'turns out random test cases are easier than writing out basic ones',
//   ),
// ); // 3
// console.log(findShort("Let's travel abroad shall we")); // 2
// -------------------------------------------------------------------------------------
// const filter_list = l => l.filter(item => item === Number(item));
// filter_list([1, 2, 'a', 'b']); // [1,2]
// filter_list([1, 'a', 'b', 0, 15]); // [1,0,15]
// -------------------------------------------------------------------------------------
// const checkForFactor = (base, factor) => (base % factor === 0 ? true : false);

// console.log(checkForFactor(9, 2)); // false;
// console.log(checkForFactor(10, 2)); // true;
// -------------------------------------------------------------------------------------
// const calculateYears = (principal, interest, tax, desired) => {
//   let depositTime = 0;

//   for (
//     let i = principal;
//     i <= desired;
//     i += i * interest - i * interest * tax
//   ) {
//     if (i < desired) {
//       depositTime += 1;
//     }
//   }
//   return depositTime;
// };

// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0
// -------------------------------------------------------------------------------------
// const longestConsec = (strarr, k) => {
//   const objOfWordsAndLength = strarr.reduce((acc, item) => {
//     acc[item] = item.length;
//     return acc;
//   }, {});

//   const arrOfKeysAndValues = Object.entries(objOfWordsAndLength);
//   const arrOfValues = Object.values(objOfWordsAndLength);
//   const res = [];

//   if (arrOfKeysAndValues.length === 0 || k <= 0) {
//     return '';
//   }

//   for (let i = 0; i < k; i += 1) {
//     const maxIndex = arrOfValues.indexOf(Math.max(...arrOfValues));
//     const newArr = arrOfKeysAndValues.splice(maxIndex, 1);
//     res.push(newArr[0][0]);
//   }
//   return res.join('');
// };
//======================краще рішення============================

// function longestConsec(strarr, k) {
//   if (k <= 0 || k > strarr.length) {
//     return '';
//   }
//   return strarr.reduce((long, item, i) => {
//     const currString = strarr.slice(i, i + k).join('');
//     return currString.length > long.length ? currString : long;
//   }, '');
// }

// console.log(
//   longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
// ); // "abigailtheta"
// console.log(longestConsec([], 3)); // ""
// console.log(
//   longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
// ); //owiaxujylentrklctozmymuwpgozvxxiu
// -------------------------------------------------------------------------------------
// const fakeBin = x => {
//   const res = [];
//   for (let i = 0; i < x.length; i += 1) {
//     x[i] < 5 ? res.push(0) : res.push(1);
//   }
//   return res.join('');
// };
//======================краще рішення============================
// function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
//======================краще рішення============================
// function fakeBin(x) {
//     return x.replace(/\d/g, d => d < 5 ? 0 : 1);
//   }

// console.log(fakeBin('45385593107843568')); // '01011110001100111'
// console.log(fakeBin('509321967506747')); // '101000111101101'
// -------------------------------------------------------------------------------------
// const helloWorld = () => {
//     const str = 'Hello World!'
//     return console.log(str);
// }
// -------------------------------------------------------------------------------------
// let v1 = 50,
//   v2 = 100,
//   v3 = 150,
//   v4 = 200,
//   v5 = 2,
//   v6 = 250;

// function equal1() {
//   let a = v1,
//     b = v1;
//   return a + b;
// }

// //Please refer to the example above to complete the following functions
// function equal2() {
//   let a = v3, //set number value to a
//     b = v1; //set number value to b
//   return a - b;
// }

// function equal3() {
//   let a = v1, //set number value to a
//     b = v5; //set number value to b
//   return a * b;
// }

// function equal4() {
//   let a = v4, //set number value to a
//     b = v5; //set number value to b
//   return a / b;
// }

// function equal5() {
//   let a = v6, //set number value to a
//     b = v3; //set number value to b
//   return a % b;
// }
// -------------------------------------------------------------------------------------
// function getLength(arr){
//     return arr.length;
//   }
//   function getFirst(arr){
//     return arr[0];
//   }
//   function getLast(arr){
//     return arr[arr.length-1];
//   }
//   function pushElement(arr){
//     arr.push(1);
//     return arr;
//   }
//   function popElement(arr){
//     arr.pop()
//     return arr;
//   }
// -------------------------------------------------------------------------------------
// function saleHotdogs(n){
//     if(n < 5) {
//       return n * 100
//     } else if(n < 10) {
//       return n * 95
//     } else {
//       return n * 90
//     }
//   }
// -------------------------------------------------------------------------------------
// function howManydays(month){
//     var days;
//     switch (month){
//     case(1):
//         days = 31;
//         break;
//     case(3):
//         days = 31;
//         break;
//     case( 5):
//         days = 31;
//         break;
//     case(7):
//         days = 31;
//         break;
//     case( 8 ):
//         days = 31;
//         break;
//     case( 10 ):
//         days = 31;
//         break;
//     case( 12 ):
//         days = 31;
//         break;
//     case(4):
//         days = 30;
//         break;
//     case(6):
//         days = 30;
//         break;
//     case(9):
//         days = 30;
//         break;
//     case(11):
//         days = 30;
//         break;

//     case(2):
//         days = 28;
//         break;
//         default:
//   return days
//   }
//     return days;
//   }
// -------------------------------------------------------------------------------------
// function padIt(str, n) {
//   if (n < 0) return;

//   let res = str;

//   do {
//     res = '*' + res;
//     while (res.length < n + str.length) {
//       res += '*';
//       break;
//     }
//   } while (res.length < n + str.length);
//   return res;
// }

// console.log(padIt('a', 1)); //"*a"
// console.log(padIt('a', 2)); //,"*a*"
// console.log(padIt('a', 3)); //,"**a*"
// console.log(padIt('a', 4)); //,"**a**"
// console.log(padIt('a', 5)); //,"***a**"
// console.log(padIt('nusjjlt', 13)); //,*******nusjjlt******
// -------------------------------------------------------------------------------------
// function pickIt(arr) {
//   var odd = [],
//     even = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
//   }

//   return [odd, even];
// }

// console.lod(pickIt([1, 2])); //,[[1],[2]]);
// console.lod(pickIt([1, 2, 3])); //,[[1,3],[2]]);
// console.lod(pickIt([3, 2, 1])); //,[[3,1],[2]]);
// console.lod(pickIt([10, 20, 30])); //,[[],[10,20,30]]);
// console.lod(pickIt([11, 21, 31])); //,[[11,21,31],[]]);
// -------------------------------------------------------------------------------------
// const giveMeFive = obj => {
//   const arrWords = [];

//   for (let key in obj) {
//     if (key.length === 5) {
//       arrWords.push(key);
//     }
//     if (obj[key].length === 5) {
//       arrWords.push(obj[key]);
//     }
//   }
//   return arrWords;
// };

// // console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' })); //["earth","world"]
// console.log(
//   giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' }),
// ); //["Ihave","money","model"]
// -------------------------------------------------------------------------------------
// const whatNumberIsIt = n => {
//   if (Number(n) === Infinity) {
//     return 'Input number is Number.POSITIVE_INFINITY';
//   } else if (n === 1.7976931348623157e308) {
//     return 'Input number is Number.MAX_VALUE';
//   } else if (n === 5e-324) {
//     return 'Input number is Number.MIN_VALUE';
//   } else if (n >= 0) {
//     return `Input number is ${n}`;
//   } else if (isNaN(n)) {
//     return 'Input number is Number.NaN';
//   } else if (Infinity * -1) {
//     return 'Input number is Number.NEGATIVE_INFINITY';
//   }
// };

// console.log(whatNumberIsIt(1 / 0)); //,"Input number is Number.POSITIVE_INFINITY");
// console.log(whatNumberIsIt(100)); //,"Input number is 100");
// console.log(whatNumberIsIt(1.7976931348623157e308)); //,"Input number is Number.MAX_VALUE");
// console.log(whatNumberIsIt(5e-324)); //,"Input number is Number.MIN_VALUE");
// console.log(whatNumberIsIt(-Number.MAX_VALUE * 2)); //,"Input number is Number.NEGATIVE_INFINITY");
// console.log(whatNumberIsIt(NaN)); //,"Input number is Number.NaN");
// console.log(whatNumberIsIt(Infinity + 1)); //,"Input number is Number.POSITIVE_INFINITY");
// -------------------------------------------------------------------------------------
// const grabDoll = dolls => {
//   var bag = [];

//   for (let i = 0; i < dolls.length; i += 1) {
//     if (bag.length === 3) break;
//     if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
//       bag.push(dolls[i]);
//     } else {
//       continue;
//     }
//   }
//   return bag;
// };

// console.log(grabDoll(['Mickey Mouse', 'Hello Kitty', 'Snow white'])); //,["Hello Kitty"]);
// console.log(
//   grabDoll(['Mickey Mouse', 'Hello Kitty', 'Hello Kitty', 'Snow white']),
// ); //,["Hello Kitty","Hello Kitty"]);
// console.log(
//   grabDoll([
//     'Mickey Mouse',
//     'Hello Kitty',
//     'Hello Kitty',
//     'Barbie doll',
//     'Snow white',
//   ]),
// ); //,["Hello Kitty","Hello Kitty","Barbie doll"]);

// console.log(
//   grabDoll([
//     'Mickey Mouse',
//     'Barbie doll',
//     'Hello Kitty',
//     'Hello Kitty',
//     'Hello Kitty',
//     'Snow white',
//   ]),
// ); //,["Barbie doll","Hello Kitty","Hello Kitty"]);
// -------------------------------------------------------------------------------------
// function colorOf(r, g, b) {
//   const red = r.toString(16);
//   const green = g.toString(16);
//   const blue = b.toString(16);
//   const colorArr = [red, green, blue];
//   const result = colorArr.map(item => (item.length < 2 ? 0 + item : item));
//   return '#' + result.join('');
// }

// console.log(colorOf(255, 0, 0)); //, "#ff0000");
// console.log(colorOf(0, 111, 0)); //, "#006f00");
// console.log(colorOf(1, 2, 3)); //, "#010203");
// -------------------------------------------------------------------------------------
// function howManySmaller(arr, n) {
//   const result = arr
//     .map(item => item.toFixed(2))
//     .filter(item => item < n).length;
//   return result;
// }
// console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); //, 2);
// console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); //, 1);
// console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); //, 2);
// -------------------------------------------------------------------------------------
// -------------------------------------interesting methods of string------------------------------------------------

// anchor()    Create HTML anchor.
// big()       Display a string in a large font.
// blink()     Display flashing string.
// bold()      Use bold display string.
// fixed()     Using a typewriter text display string.
// fontcolor() Displays a string using the specified color.
// fontsize()  Displays a string using the specified size.
// italics()   Use italics string.
// link()      Display a string as a link.
// small()     Use small size to display string.
// strike()    Use the delete line to display the string.
// sub()       Display the string as a subscript.
// sup()       Display the string as a superscript.

// -------------------------------------------------------------------------------------
// const cutIt = arr => {
//   let len = arr[0].length;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length < len) len = arr[i].length;
//   }

//   const res = arr.map(item => item.slice(0, len));
//   return res;
// };

// console.log(cutIt(['ab', 'cde', 'fgh'])); // , ["ab","cd","fg"]);
// console.log(cutIt(['abc', 'defgh', 'ijklmn'])); // , ["abc","def","ijk"]);
// console.log(cutIt(['codewars', 'javascript', 'java'])); // , ["code","java","java"]);
// -------------------------------------------------------------------------------------
// const firstToLast = (str, c) =>
//   str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;

// console.log(firstToLast('ababc', 'a')); // 2
// console.log(firstToLast('ababc', 'c')); // 0
// console.log(firstToLast('ababc', 'd')); // -1
// -------------------------------------------------------------------------------------
// const splitAndMerge = (string, separator) =>
//   string
//     .split(' ')
//     .map(item => item.split('').join(separator))
//     .join(' ');

// console.log(splitAndMerge('My name is John', ' ')); // , "M y n a m e i s J o h n");
// console.log(splitAndMerge('My name is John', '-')); // , "M-y n-a-m-e i-s J-o-h-n");
// console.log(splitAndMerge('Hello World!', '.')); // , "H.e.l.l.o W.o.r.l.d.!");
// console.log(splitAndMerge('Hello World!', ',')); // , "H,e,l,l,o W,o,r,l,d,!");
// -------------------------------------------------------------------------------------
// const alienLanguage = str => {
//   let upperStrArr = str.toUpperCase().split(' ');
//   const res = [];

//   for (let i = 0; i < upperStrArr.length; i += 1) {
//     // const lastLetter = upperStrArr[i][upperStrArr[i].length - 1];//останній символ слова
//     res.push(upperStrArr[i].replace(/\w$/g, x => x.toLowerCase()));
//   }
//   return res.join(' ');
// };

// // console.log(alienLanguage('My name is John')); // , "My NAMe Is JOHn"
// // console.log(alienLanguage('this is an example')); // , "THIs Is An EXAMPLe"
// // console.log(alienLanguage('Hello World')); // , "HELLo WORLd"
// // console.log(alienLanguage('HELLO WORLD')); // , "HELLo WORLd"
// ---------------------------------не вирішив 😢----------------------------------------------------
// const topSecret = str =>
//   str.replace(/[a-z]/gi, c =>
//     String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)),
//   );

//question1: The top secret file number is...
// answer1 = '1850';
// //question2: Super agent's name is...
// answer2 = 'fQT';
// //question3: He stole the treasure is...
// answer3 = 'Train tire';

// console.log(topSecret('Pb qdph lv Mrkq')); // , "My name is John"
// console.log(topSecret('wklv lv dq hadpsoh')); // , "this is an example"
// console.log(topSecret('Khoor Zruog!')); // , "Hello World!"
