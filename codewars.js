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
console.log(2);

// function removeChar(str) {
//   return str.slice(1, str.length - 1);
// }
// console.log(removeChar("JavaScript")); //avaScrip