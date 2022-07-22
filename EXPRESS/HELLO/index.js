const express = require('express');
const port = 3001
const app = express();
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
