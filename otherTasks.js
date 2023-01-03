// ===================ЗАДАЧКА З КОНСПЕКТУ - СТВОРЕННЯ ОБ"ЄКТУ УНІКАЛЬНИХ ЕЛЕМЕНТІВ І ЇХ КІЛЬКОСТІ
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((acc, tweet) => {
//     acc.push(...tweet.tags);

//     return acc;
//   }, []);

// const tags = getTags(tweets);
// console.log('tags ', tags);
// // // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // // Это стандартная практика если callback-функция довольно большая.

// // // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // // то создаем его и записывает ему значение 0.
// // // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   //   if (!acc.hasOwnProperty(tag)) {
//   //     acc[tag] = 0;
//   //   }

//   //   acc[tag] += 1;

//   //   return acc;
//   // або
//   return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }; //модуль 6 заняття 11
// };

// // // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);//{js: 3, nodejs: 3, html: 2, css: 2, react: 2}
// -------------------------------------------------------------------------------------

//============================тут зробив сам так як зрозумів============================
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, { tags }) => [...acc, ...tags], []);
// console.log(allTags);

// const uniqObj = allTags.reduce((acc, item) => {
//   //   if (acc[item]) {
//   //     acc[item] += 1;
//   //   } else {
//   //     acc[item] = 1;
//   //   }
//   //   або
//   acc[item] ? (acc[item] += 1) : (acc[item] = 1);
//   return acc;
// }, {});

// console.log(uniqObj);

// Задачка з тестового про баржу і зерно

// const loadGrain = levels => {
//   if (levels.length === 0) return 0;
//   let total = [];
//   let idx = 0;

//   for (let i = idx; i < levels.length; i = idx) {
//     if (idx === levels.length - 1) break;
//     const arrItem = [];
//     arrItem.push(levels[i]);
//     for (let j = i + 1; j < levels.length; j += 1) {
//       if (j === levels.length - 1) {
//         arrItem.push(levels[j]);
//         idx = j;
//         total = [...total, arrItem];
//         break;
//       }

//       if (levels[i] > levels[j]) {
//         arrItem.push(levels[j]);
//       } else {
//         arrItem.push(levels[j]);
//         idx = j;
//         total = [...total, arrItem];
//         break;
//       }
//     }
//   }

//   const result = total.reduce((acc, item) => {
//     if (item[0] < item[item.length - 1]) {
//       for (let i = 0; i < item.length - 2; i += 1) {
//         acc += item[0] - item[i + 1];
//       }
//     } else {
//       item.reverse();
//       for (let i = 0; i < item.length - 2; i += 1) {
//         acc += item[0] - item[i + 1];
//       }
//     }
//     return acc;
//   }, 0);
//   return result;
// };

// console.log(loadGrain([4, 1, 3])); //2
// console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])); //7
// console.log(loadGrain([2, 0, 1, 5, 2, 7])); //6
// console.log(loadGrain([2, 4, 2])); //0
// console.log(loadGrain([7, 4])); //0
// console.log(loadGrain([])); //0
