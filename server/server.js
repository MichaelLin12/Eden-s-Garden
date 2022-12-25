const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
  res.send({"users":["UserOne","UserTwo",]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})