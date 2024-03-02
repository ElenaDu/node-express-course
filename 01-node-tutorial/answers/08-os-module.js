const os = require("os");

console.log(`Operating system name: ${os.type()}`);
console.log(`Operating system platform: ${os.platform()}`);
console.log(`Operating system release date: ${os.release()}`);
console.log(`Total memory: ${os.totalmem()} bytes`);
console.log(`Free memory: ${os.freemem()} bytes`);