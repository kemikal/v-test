var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'John', likes: "Odla, Kaniner, långa promenader"},
  {id: 2, name: 'Jane', password: "test"},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Alice'},
  {id: 5, name: 'Bengt'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
