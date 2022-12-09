
// //example fetching process and their state
// const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");



// //view op on developer option



// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise1.then((response) => {
//   const jsonPromise1 = response.json();
//   jsonPromise1.then((data) => {
//     console.log(data[0].name);
//   });
// });

// //
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise.then((response) => response.json())            //Instead of calling the second then() inside the handler for the first then(), we can return the promise returned by json(), and call the second then() on that return value. 
//   .then((data) => {
//     console.log(data[0].name);
//   });



// //
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise3
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   });

// //////////////////////////////////////////////////////////////
// //catch for catch the problem

// const fetchPromise4 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

// fetchPromise4
// .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Catch block : Could not get products: ${error}`);
//   });

/////////////////////////////////////////////////////////////


//Combining multiple promises-- promise.all()
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`It is resolved:${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });


  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  














//  [
//   {
//     "name" : "baked beans",
//     "price" : 0.40,
//     "image" : "beans.jpg",
//     "type" : "vegetables"
//   },
//   {
//     "name" : "hot dogs",
//     "price" : 1.99,
//     "image" : "hotdogs.jpg",
//     "type" : "meat"
//   },
//   {
//     "name" : "spam",
//     "price" : 2.85,
//     "image" : "spam.jpg",
//     "type" : "meat"
//   },
//   {
//     "name" : "refried beans",
//     "price" : 0.99,
//     "image" : "refried.jpg",
//     "type" : "vegetables"
//   },
//   {
//     "name" : "kidney beans",
//     "price" : 0.58,
//     "image" : "kidney.jpg",
//     "type" : "vegetables"
//   },
//   {
//     "name" : "garden peas",
//     "price" : 0.52,
//     "image" : "gardenpeas.jpg",
//     "type" : "vegetables"
//   },
//   {
//     "name" : "mushy peas",
//     "price" : 0.58,
//     "image" : "mushypeas.jpg",
//     "type" : "vegetables"
//   },
//   {
//     "name" : "corned beef",
//     "price" : 2.39,
//     "image" : "cornedbeef.jpg",
//     "type" : "meat"
//   },
//   {
//     "name" : "tomato soup",
//     "price" : 1.40,
//     "image" : "tomatosoup.jpg",
//     "type" : "soup"
//   },
//   {
//     "name" : "chopped tomatoes",
//     "price" : 0.45,
//     "image" : "tomato.jpg",
//     "type" : "vegetables"
//   },
//   {
//     "name" : "chicken noodle soup",
//     "price" : 1.89,
//     "image" : "chickennoodle.jpg",
//     "type" : "soup"
//   },
//   {
//     "name" : "carrot and coriander soup",
//     "price" : 1.49,
//     "image" : "carrotcoriander.jpg",
//     "type" : "soup"
//   }
// ]