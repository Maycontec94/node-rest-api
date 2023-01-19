const express = require('express')

const app = express()

app.get ('/hello', (req, res) =>{
res.status(200).send('Hello World!')
} )

app.get ('/hello/:name', (req, res) => {
const name = req.params.name
res.status(200).send('Hello {name}! ')
})

app.listen(3000, '0.0.0.0', () => {
console.log('Server started')
} )

.
once
('error', (error) => {
  console.error(error)
  process.exit(1)
})
