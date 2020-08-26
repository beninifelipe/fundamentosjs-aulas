//function nomeDaFuncao(parametro1){
// bloco de codigo
//}

//function queDiaEHoje(){
 //   const data = new Date ()
   // console.log(`Hoje é dia: ${data.getDate()}`)
//}
//queDiaEHoje()

//function soma(valor1, valor2){
  //  console.log(`A Soma de ${valor1} + ${valor2} é`, valor1 + valor2)
//}
//soma(10, 20)
//soma(3, 4)  

// funções podem retornar valores 
function soma(valor1, valor2, valor3,valor4) {
    return valor1 + valor2 + valor3 + valor4
}

const idade = 20
const tamanho = 10
const peso = 60
const calçado = 40

const resultado = soma(idade, tamanho, peso, calçado)
console.log(`O resultado da soma é =`, resultado)

function multiplicar(valor1, valor2){
const resultado = valor1 * valor2
return resultado 
}

console.log(`O resultado da multiplicação é =`, multiplicar(10,30))



const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2, // = 20%
    salarioBruto: 2000,
    salarioLiquido: 0
}
const funcionario2 = {
    nome: 'Maria',
    desconto: 0.1, // = 10%
    salarioBruto: 2000,
    salarioLiquido: 0
}

const descontoFuncionario1 = 
funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)

const descontoFuncionario2 = 
funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)

console.log(
    `Funcionario1 recebe: ${descontoFuncionario1}
   Funcionario2 recebe: ${descontoFuncionario2}`
)



function calcularDesconto(salarioBruto,desconto){
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}`
    )
