const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta', (req, res)=>{
    res.send("visiting instagram")
})

app.get('/tweet', (req, res)=>{
    res.send("visiting tweets")
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>learning express</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})