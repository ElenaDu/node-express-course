const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark: 200 } );
let counter = 0;
stream.on('data', (result)=> {
    counter++;
    console.log(result)
});
stream.on('end', () => {
    console.log(`Total number of chunks received: ${counter}`);
  });
stream.on('error', (err) => console.log(err));

