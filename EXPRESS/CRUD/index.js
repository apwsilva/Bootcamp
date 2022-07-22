const express = require('express');
const port = 3001
let produtos = require('./produtos')
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const body = req.body;
  
  prod = [...produtos, ...body];
    res.status(200).json(prod);
})

app.get('/produtos/:id/:details?', (req, res)=>{

  const id = Number(req.params.id)

  const details = req.params.details || "sem descrição"

  const product = produtos.find((produto)=> produto.id === id)

  res.status(200).json(product)
})

app.put('/produtos/:id', (req, res)=>{
  const id = Number(req.params.id)
  const content = req.body

  const product = produtos.find((produto)=> produto.id === id)

  if(!product){
      res.status(400).json({"mensage": "produto não encontrado"})
  }


const produtoAtt =  produtos.map((produto)=>{
      if(produto.id === id){
          return content
      }
      return produto
  })

  
  produtos = produtoAtt
res.status(200).json(produtos)

})



app.delete('/produtos/:id', (req, res)=>{
  const id = Number(req.params.id)

  const product = produtos.find((produto)=> produto.id === id)

  if(!product){
      res.status(400).json({"mensage": "produto noa encontrado"})
  }

  produtos = produtos.filter((produto)=>{

      return produto.id !== id

  })

  res.status(200).json(produtos)

})




app.listen(port, () => {
  console.log(`Ouvindo na porta ${port}`)
})

