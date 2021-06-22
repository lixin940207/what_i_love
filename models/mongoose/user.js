const mongoose = require('mongoose');

const Schema = mongoose.Schema;//规定表里面的字段的规范

const UserSchema = new Schema({
    name: {type: String, required: true, index: true},
    age: {type: Number, max: 188, min: 0},
});

const UserModel = mongoose.model('user', UserSchema);//绑定表和model

async function insert(user) {
    return await UserModel.create(user);
}

async function getOneById(id) {
    return await UserModel.findById(id)
}

async function getOneByName(name) {
    return await UserModel.findOne({name: name})
}

async function list(params) {
    const match = {};
    const flow = UserModel.find(match);
    return await flow.exec();
}

module.exports = {
    insert,
    getOneById,
    getOneByName,
    list
};
