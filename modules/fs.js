const fs = require("fs");
const path = require("path");

//Criar uma pasta
/*

fs.mkdir(path.join(__dirname, "/criandoPasta"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("pasta criada com sucesso");
});

*/

//Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/criandoPasta", "criandoArquivo.txt"),
  "hello node",
  (error) => {
    if (error) {
      return console.log("Erro: " + error);
    }

    console.log("Arquivo criado com sucesso");
  }
);

//Adicionando um arquivo
fs.appendFile(
  path.join(__dirname, "/criandoPasta", "criandoArquivo.txt"),
  "meu nome é vitor",
  (error) => {
    if (error) {
      console.log("Erro: " + error);
    }

    console.log("Arquivo adicionado com sucesso!");
  }
);
