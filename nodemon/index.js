var express = require('express');
var app = express();


const port = 3012

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })