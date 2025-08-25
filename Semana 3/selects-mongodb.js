const database = 'BD3-Aula';

const collection = 'BIBLIOTECA';

use(database);

// SELECIONA DOCUMENTOS COM USO DO OPERADOR MAIOR $gt
db['BIBLIOTECA'].find({
    valor: {$gt: 100}
});

// SELECIONA DOCUMENTOS COM USO DO OPERADOR MENOR $lt
db['BIBLIOTECA'].find({
    valor: {$lt: 100}
});

// DEFININDO UM INTERBALO ENTRE VALORES
db['BIBLIOTECA'].find({
    valor: {$gt: 50, $lt: 200}
}).sort({valor: 1});

// OPERADOR LÓGICO AND:
db['BIBLIOTECA'].find({
    $and: [
        {categoria: {$eq: 'Fantasia Heróica'}},
        {valor: {$lt: 100}}
    ]
});

// OPERADOR LÓGICO OR:
db['BIBLIOTECA'].find({$or: [
    {categoria: {$eq: 'Fantasia Heróica'}},
    {valor: {$lt: 100}}
]});

// SELEÇÃO DE DOCUMENTOS COM USO DO OPERADOR $in:
db['BIBLIOTECA'].find({
    autor: {$in: ['J. R. R. Tolkien', 'Isaac Asimov']}
}, {_id: 0, codigo: 0, descricao: 0}).sort({valor: 1});