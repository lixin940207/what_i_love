const mongoose = require("mongoose")
const logger = require("../utils/loggers/logger");

const uri = 'mongodb://localhost:27017/what_i_love';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true)
const db = mongoose.connection;


db.on('open', ()=>{
    logger.info('db connected!');
});

db.on('error', (e) => {
    logger.error(e);
});

module.exports = db;
