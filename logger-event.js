const EventEmitter = require('events').EventEmitter;
const logger = new EventEmitter();

logger.on('error', (message) => {
    console.log(message);
});

logger.on('debug', (message) => {
    console.log(message);
});

logger.emit('error', 'sorry');
logger.emit('debug', 'debugging');