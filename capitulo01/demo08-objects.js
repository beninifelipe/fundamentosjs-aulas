const heroi = {
    nome: 'Batman',
    idade: 40,
    sexo: 'Masculino'
}

//console.log( 'nome' , heroi.nome)
//console.log( 'idade' , heroi ['idade'])
//console.log('sexo' , heroi.sexo)
//console.log('cidade', heroi.cidade)
//heroi.id = 0001
//console.log(heroi)

// saber as chaves
console.log(Object.keys(heroi))

// saber os valores 
console.log(Object.values(heroi))

// juntar dois objetos
const pessoa ={
    tamanho: '2 metros'
}

const novoObj = Object.assign(heroi, pessoa)
delete novoObj.idade
console.log(novoObj)