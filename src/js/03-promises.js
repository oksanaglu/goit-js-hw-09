// const refs = {
//   delay: document.querySelector('.delay'),
//   step: document.querySelector('.step'),
//   amount: document.querySelector('.amount'),
// };




// function createPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     resolve({ position, delay });
//   } else {
//     reject({position, start})
//   } 
//     }, timeout);
//   }
//   )
 
// }


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });