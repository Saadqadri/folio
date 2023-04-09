const express = require('express')
const app = express()
const port = 3020

app.use(express.static('static'))
app.use(express.static('views'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})