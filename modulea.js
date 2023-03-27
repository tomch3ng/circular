'use strict';

exports.counter = 1;
// 2. Note that, at this point, require('./modulea') will return { counter: 1 }; 
// this will be the case when we load moduleb in the next line

const b = require('./moduleb');
// 4b. require('./moduleb') returns the object described in Step 4a, so: 
// b = { 
//     a: { 
//         counter: 1
//     }, 
//     counter: 2
// }

module.exports = {b, counter: this.counter + 1};
// 5a. modulea finishes executing; the following will be stored in the require cache for './modulea' and returned by require('./modulea') now;
// exports = {
//     b: { 
//         a: { 
//             counter: 1
//         }, 
//         counter: 2
//     },
//     counter: 2
// }