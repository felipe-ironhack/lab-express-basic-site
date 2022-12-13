const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/healthcheck', (req, res, next) => {
  res.send(`<p> OK </p>`)
})

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/views/homepage.html')
})
app.get('/work', (req, res, next) => {
  res.sendFile(__dirname + '/views/work.html')
})
app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html')
})






app.listen(process.env.PORT, () => {
  console.log(`Server is connected to 3000`)
})