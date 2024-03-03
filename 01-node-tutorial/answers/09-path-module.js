const path = require('path');

console.log('Directory separator:', path.sep);

const filePath = path.join('/Users', 'alenadudko', 'node-express-course','01-node-tutorial','answers', '01-intro.js')
console.log(filePath)

const absolute = path.resolve(__dirname,'01-intro.js')
console.log(absolute)

