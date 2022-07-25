const express = require('express');
const port = 3001

const productRout = require('./routes/routesProducts');

const app = express();

app.use(express.json());

app.use('/products', productRout )

app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}`)
})