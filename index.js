const express = require('express')
const cors = require('cors')
const db = require('./dbmodel.js')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/lists', (req, res) => {
  console.log(req.query);
  db.getListRecipes(req.query.listname)
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      console.log(error);
    });

})

app.post('/lists', (req, res) => {
  console.log(req.body);
  db.addToList(req.body.listname, req.body.recipe, req.body.ingredients, req.body.url)
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      console.log(error);
    });
})

app.delete('/lists', (req, res) => {
  console.log(req.query.id);
  db.removeFromList(req.query.id)
    .then((results) => {
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      console.log(error);
    });
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})