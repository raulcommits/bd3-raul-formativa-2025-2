const database = "BD3-Aula";

const collection = "BIBLIOTECA";

use(database);

// Atualiza um arquivo no MongoDB
db["BIBLIOTECA"].update(
    {codigo: "1"},
    {$set: {titulo: "Esse titulo é supostamente atualizado"}}
);

db["BIBLIOTECA"].find();

// Deleta um item em um arquivo
db["BIBLIOTECA"].deleteOne({codigo: "1"});

db["BIBLIOTECA"].find();