const app = require('express')();
const { v4 } = require('uuid');

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

router.get('/:userId', function(req, res, next) {
  userId = req.params.userId;
  console.log(userId);

  let findUser = users.find(user => user.id == userId);

  res.json(findUser);
});

router.post('/login', function(req, res, next) {
  const { name, password } = req.body;
  const foundUser = users.find(user => user.name === name);

  if(password === foundUser.password) {
    res.status(201).json({name: foundUser.name, id: foundUser.id})
  }
  else {
    res.status(401).json("Incorrect password or username")
  }
});

module.exports = app;