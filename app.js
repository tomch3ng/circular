'use strict';

// 1. require() function will load and run the code in modulea.js
const a = require('./modulea');
// 5b. require('./modulea') returns the export noted in Step 5a
// a = { 
//     b: {
//         a: {
//             counter: 1
//         },
//         counter: 2
//     },
//     counter: 2
// }

// 6. moduleb was fully initialized and loaded in the require cache in Step 4, require('./moduleb') will return the same result as Step 5.
const b = require('./moduleb');
// b = { 
//     a: { 
//         counter: 1
//     }, 
//     counter: 2
// }

console.log('a.counter: ' + a.counter + ', a.b.counter: ' + a.b.counter);
// a.counter: 2, a.b.counter: 2
console.log('b.counter: ' + a.counter + ', b.a.counter: ' + b.a.counter);
// b.counter: 2, b.a.counter: 1