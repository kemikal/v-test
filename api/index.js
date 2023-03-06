const app = require('express')();

let users = [
    {id: 1, name: 'John', likes: "Odla, Kaniner, långa promenader"},
    {id: 2, name: 'Jane', password: "test"},
    {id: 3, name: 'Bob'},
    {id: 4, name: 'Alice'},
    {id: 5, name: 'Bengt'}
  ]

app.get('/api', (req, res) => {
  res.json(users)
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;