// Faça uma função chamada "calcularPreco" que receba dois parâmetros, sendo o primeiro o nome de um produto (ex: Laptop), e o segundo o preço desse produto (sem o sinal $). Esta função deve imprimir o nome do produto, o custo de envio e o preço final no console.    

function calcularPreco(nome, preco) {
  let custoEnvio = 300;
  if (preco >= 2001 || preco <= 4000) {
    custoEnvio = 450
  } 
  if (preco > 4000) {
    custoEnvio = 700
  }

  let string = `O produto ${nome} custa ${preco}. Seu custo de envio é ${custoEnvio}. Portanto, o preço final é ${preco + custoEnvio}`

  return string;
}

console.log(calcularPreco('Macbook', 2500));
console.log(calcularPreco('Celular', 500));
console.log(calcularPreco('Playstation', 4500));