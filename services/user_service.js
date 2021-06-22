const User = require("../models/mongoose/user");

module.exports.getAllUsers = async function () {
    return await User.list();
}

module.exports.addNewUser = async function (name, age) {
    return await User.insert({name, age});
}

module.exports.getUserById = async function (id) {
    return await User.getOneById(id);
}

module.exports.getUserByName = async function (name) {
    return await User.getOneByName(name);
}
