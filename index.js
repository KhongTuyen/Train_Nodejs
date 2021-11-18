const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Method GET!')
})
app.post('/tuyen/deptrai',(req,res) =>{
 res.send('Method PORT')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})