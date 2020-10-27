const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('lie sau')
})

app.post('/', (req, res) => {
    
    res.send(req.body)
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})