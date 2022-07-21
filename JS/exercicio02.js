
let products = [
  { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
  { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
  { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
  { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
  { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
  { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
  { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
  { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
  { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
  { name: 'Monitor', price: 200, quantity: 3, colors: [] },
  ]
/* EXERCICIO OBJETOS E MODULOS */

// 1 Adcione um ID exclusivo a cada produto começando em 1.

function addIdInProducts() {
  let newProduct = products.map((product, index) => ({ ...product, id: index}))
  return newProduct
}

addIdInProducts()

// 2- Imprima o nome de cada um dos produtos no console.

function printProductName() {
  return products.map(({name}) => console.log(name))
}

// printProductName()

// 3 - imprima no console o produto com o id3.

// console.log(products[2])

// 4- Imprima no console os produtos com a cor black

function printColorBlackProducts() {
  return products.filter((product) => product.colors.includes('black'))
}

// console.log(printColorBlackProducts())

// 5 - Imprima no console os produtos que não possuem cor.

function printColorZeroProducts() {
  return products.filter((product) => product.colors.length == 0)
}

// console.log(printColorZeroProducts())

/* 
    EXERCICIO AULA VIRTUAL
*/
//   1. Adicione um novo produto ao array com as mesmas propriedades dos produtos
// existentes.

const addProduct = (name, price, quantity, colors) => {
  products.push(
    {name, price, quantity, colors}
  )

  return products
}

// console.log(products)

// console.log(' euuu', addProduct('ferrary', 800000, 5, ['red', 'blue', 'silver']))

// 2. Remova os produtos fora de estoque da matriz.

function removeItems() {
  return products.filter((product) => product.quantity > 0)
}

// console.log(removeItems())
// 3. Imprima no console a soma do estoque de todos os produtos.

function someStoreQuantity() {
  let contador = 0
  products.forEach((product) =>
  {
    contador += product.quantity
  })
  return contador
}

// console.log(someStoreQuantity())

// 4. Imprima produtos com preço superior a um determinado valor.

function valuePrint() {
  return products.filter((product) => product.price > 10)
}

// console.log(valuePrint())

// 5. Imprima o nome de todos os produtos que tenham a letra ‘o’ em seu nome.

function printNameIncludesO() {
  return products.map(({name}) => {
    if(name.includes('o')) {
      return name
    }
  })
}

console.log(printNameIncludesO())