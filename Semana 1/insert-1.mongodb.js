/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO BANCO DE DADOS: */
const database = 'BD3-Aula';

/* CRIAÇÃO DA CONSTANTE QUE REPRESENTA O NOME DO COLEÇÃO DE DADOS: */
const collection = 'BIBLIOTECA';

/* DEFINIÇÃO DO BANCO DE DADOS A SER UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO: */
use(database);

/* EXEMPLO DE INSERÇÃO COM InsertOne: */
db['BIBLIOTECA'].insertOne(
    {
      "codigo":"1",
      "titulo": "As Cavernas de Aço",
      "autor": "Isaac Asimov",
      "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.",
      "imagem":"/livros/cavernas_aco.jpg",
      "valor": 120,
      "categoria":"Ficção Científica"
    }
);