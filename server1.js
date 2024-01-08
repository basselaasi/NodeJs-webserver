const os = require('os')
const { add, subtract, devide, multiply } = require('./math')
const fsPromises = require('fs').promises;
const { error } = require('console');
const path = require('path');
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const fileOps = async () => {
    try{

        try {
            await fsPromises.access(path.join(__dirname, 'files', 'starter.txt'));
            console.log('File "Starter" exists');
        }
        catch (error) {
            const t = 7000;
            await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), 'Hello World!!!\n');
            console.log('File "Starter" created');
            console.log('Waiting 5 seconds');
            const interval = setInterval(() => {
                process.stdout.write('..'); // Prints a dot without a newline
            }, 1000);
            await sleep(t);
            clearInterval(interval);
        }
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promisewrite.txt'),data);
        console.log('Write complete');
        await fsPromises.appendFile(path.join(__dirname, 'files','promisewrite.txt'), '\n\nNice to meet you');
        console.log('Append complete');
        await fsPromises.rename(path.join(__dirname, 'files', 'promisewrite.txt'), path.join(__dirname, 'files','promisecomplete.txt'));
        console.log('Rename complete');

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promisecomplete.txt'), 'utf8');
        console.log(data);
    }
    catch(err){
        console.error(err)
    }
}

fileOps();
/*
fs.readFile('/home/bassel/Desktop/test123/test123.txt','utf8' ,(err, data)=>{
    if (err) throw err;
    console.log(data);

})

fs.writeFile(path.join(__dirname, 'reply.txt'),'Hello World',(err)=>{
    if (err) throw err;
    console.log('Write complete');

    fs.appendFile(path.join(__dirname, 'reply.txt'),'Hi there, nice to meet you',(err)=>{
        if (err) throw err;
        console.log('Write complete');
        
    fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'reply2.txt'), (err)=>{
        if (err) throw err;
        console.log('Rename complete');
    })
    })
})

*/
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit;
})

console.log(add(9,9))
console.log(subtract(9,9))
console.log(devide(9,9))
console.log(multiply(9,9))