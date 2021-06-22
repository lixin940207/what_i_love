const mongoose = require("mongoose")

const uri = 'mongodb://localhost:27017/what_i_love';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true)
const db = mongoose.connection;


db.on('open', ()=>{
    console.log('db connected!')
});

db.on('error', (e) => {
    console.log(e)
})

module.exports = db;
