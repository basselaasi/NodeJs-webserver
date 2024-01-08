const logEvents = require('./middleware/logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

//initializa object

const myEmitter = new MyEmitter();

// add listner for the log event

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(()=>{
    myEmitter.emit('log', 'log event emitted!!');
}, 2000);