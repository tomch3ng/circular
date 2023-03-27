'use strict';

exports.counter = 1;

const a = require('./modulea');
// 3. Remember that, per Step 2, require('./modulea') will return { counter: 1 }, so now
//  a = { counter: 1 }

module.exports = {a, counter: this.counter + 1};
// 4a. moduleb finishes executing; the following will be stored in the require cache for './moduleb' and returned by require('./moduleb');
// exports = { 
//     a: { 
//         counter: 1
//     }, 
//     counter: 2
// }