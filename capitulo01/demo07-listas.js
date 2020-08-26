const minhaLista = []
const  minhaListaDeTarefas= [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

//console.log(minhaListaDeTarefas[0])
//console.log(minhaListaDeTarefas[1])
//console.log(minhaListaDeTarefas[4])

// quantidade de itens no array
// console.log(minhaListaDetarefas.length)

// adicionar  item
minhaListaDeTarefas.push('formatar computador')
// console.log(minhaListaDeTarefas);

// como remover o último da lista 
// const ultimo = minhaListaDeTarefas.pop()
// console.log(ultimo, minhaListaDeTarefas)

// removero primeiro da lista
// const primeiro = minhaListaDeTarefas.shift()
// console.log(primeiro, minhaListaDeTarefas)

// remover um item específico a partir de um índice 
//console.log(minhaListaDeTarefas[2])
// qual item de ínicio
// quantos remover
// minhaListaDeTarefas.splice(2, 1)
// console.log(minhaListaDeTarefas)

const itens = [
    1, 'computador' , 0.22
]

// verificar tipo de array
//console.log(typeof(itens))
// objective

// verificar se é array da forma correta 
console.log(Array.isArray(itens))
// true

// ordenar
// const numeros = [ 'a', 'c', 'b' ,'d']
// console.log(numeros.sort())

// const novo = itens.concat([1, 2, 3])
   // console.log(novo)

// juntar arrays em uma string
// console.log(itens.join(' - '))

// verificar o indice do item
const index = itens.indexOf('computador')
console.log(itens[index])