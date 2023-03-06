var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'John', likes: "Odla, Kaniner, långa promenader"},
  {id: 2, name: 'Jane', password: "test"},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Alice'},
  {id: 5, name: 'Doe'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {

  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});

module.exports = router;
