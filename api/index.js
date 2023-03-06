const app = require('express')();

let users = [
    {id: 1, name: 'John', likes: "Odla, Kaniner, långa promenader"},
    {id: 2, name: 'Jane', password: "test"},
  ]

app.get('/api', (req, res) => {
  res.json(users)
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.post('/', function(req, res, next) {

  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});

module.exports = app;