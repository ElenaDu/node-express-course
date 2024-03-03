const names = require("./04-names.js");
const hi = require("./05-utils.js");
const flavor = require('./06-alternative-flavor');
require('./07-mind-grenade.js')

hi('Lena');
hi(names.name1);
console.log(flavor.items);
hi(flavor.singlePerson.name);