const express = require('express')
const router = require('./routes/products')
const app = express()

const port = process.env.port | 3000

// parse application/json
app.use(express.json())

app.use('/products', router)

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})