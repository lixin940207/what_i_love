const express = require('express');
const router = express.Router();
const UserServices = require('../services/user_service')


/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  // const u = new User(req.query.name, req.query.age);
  // res.locals.user = u
  //
  // res.render('user')
  (async () => {
    res.locals.users = await UserServices.getAllUsers();
    res.render('users');
  })()
      .then(value => {
        console.log(value)})
      .catch(reason => {
        console.log(reason)})
});

router.post('/', function (req, res) {
  const {name, age} = req.body;
  const user = UserServices.addNewUser(name, age);
  res.json(user);
})

router.get('/:userId', function (req, res) {
  res.locals.user = UserServices.getUserById(req.params.userId);
  res.render('user');
})




module.exports = router;
