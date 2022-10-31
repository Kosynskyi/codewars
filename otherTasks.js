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
