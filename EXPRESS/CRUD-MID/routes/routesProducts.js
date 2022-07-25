const express = require('express')
const products = require('../products');

const router = express.Router();

router.get(
  '/', (_req, res) => {
    res.status(200).json(products)
  }
)

router.get(
  '/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((produto) => produto.id == id)
    res.status(200).json(product)
  }
)

router.post(
  '/', (req, res) => {
    const result = req.body;

    products = [...produtos, result]
    res.status(200).json(products)
  }
)

router.put(
  '/:id', (req, res) => {
    const id = req.params.id;
    const result = req.body;

    const product = products.find((produto) => produto.id == id)
    
    if (!product) {
      return res.status(400).json({ "message": "Produto não encontrado" })
    }
    const attProduct = products.map((product) => {
      if (product.id === +id) return result;

      return product;
    })

    products = attProduct;

    res.status(200).json(products)

  }
)

router.delete(
  '/:id', (req, res) => {
    const id = req.params.id;

    const product = products.find((product) => product.id === +id);

    if (!product) {
      return res.status(400).json({"message": "Produto não encontrado"})
    }

    products = products.filter((product) => product.id !== +id);
    
    return res.status(200).json(products)
  }
)

module.exports = router;