const express = require('express');
const router = express.Router();
const UserServices = require('../services/user_service')
const HTTPReqParamError = require('../errors/http_request_param_error');
const logger = require("../utils/loggers/logger");

/* GET users listing. */
router.get('/', async function (req, res, next) {
    (async () => {
        res.locals.users = await UserServices.getAllUsers();
    })()
        .then(() => {
            res.render('users');
        })
        .catch(() => {
            next()
        })
});

router.post('/', function (req, res) {
    const {name, age} = req.body;
    const user = UserServices.addNewUser(name, age);
    res.json(user);
})

router.get('/:userId', function (req, res) {
    (async () => {
        const {userId} = req.params
        if (userId.length < 5) throw new HTTPReqParamError('userId', 'userid cannot be empty', 'userid cannot be empty');
        res.locals.user = UserServices.getUserById(userId);
    })()
        .then(() => {
            res.render('user');
        })
        .catch((reason) => {
            logger.error(reason)
            res.json(reason)
        })
})

module.exports = router;
