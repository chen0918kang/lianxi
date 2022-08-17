const express = require('express');
const app = express()
app.use('/images',express.static('../images/tabs'))


app.listen(80,() => {
  console.log('express serve running at http://127.0.0.1');
})