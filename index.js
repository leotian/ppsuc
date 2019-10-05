const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express()

app.use(compression({ level: 9 }))

app.use(express.static(path.resolve(__dirname)))

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
