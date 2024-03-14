const { writeFile, readFile } = require("fs").promises;

writeFile('temp.txt', "This is line 1\n")
  .then(()=> {
    console.log('Line 1 written successfully');
    return writeFile('temp.txt', "This is line 2\n",{ flag: 'a' });
  })
  .then(()=> {
    console.log('Line 2 written successfully');
    return writeFile('temp.txt', "This is line 3\n",{ flag: 'a' });
  })
  .then (() => {
    console.log('Line 3 written successfully');
    return readFile('temp.txt', 'utf-8');
  })
  .then ((text) => {
    console.log(`This is the content of the file: ${text}`);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
});

