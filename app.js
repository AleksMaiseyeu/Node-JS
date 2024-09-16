const Logger = require('./log');
const logger = new Logger();


logger.on('some_event', (args)=>{
    // дестуктуризация значений из args
    const {id, text}=args;
    console.log(id, text);
});

logger.log('User Logged!!!');

