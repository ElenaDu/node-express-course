const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile('temp.txt', "This is line 1\n");
        await writeFile('temp.txt', "This is line 2\n", { flag: 'a' });
        await writeFile('temp.txt', "This is line 3\n", { flag: 'a' });
        console.log("Completed successfully.");

    } catch (error) {
        console.log("An error occured:", error);
    }
};


const reader = async () => {
    try {
        const text = await readFile('temp.txt', 'utf-8');
        console.log(`This is the file content:\n${text}`);

    } catch (error) {
        console.log("An error occured:", error);
    }
}

readWrite = async () => {
    await writer();
    await reader();
}

readWrite();