const path = require("path");

//apenas o nome do arquivo atual
console.log("Nome do arquivo: " + path.basename(__dirname));

//Nome do diretório atual
console.log("Nome do diretório: " + path.dirname(__filename));

//Extensão do arquivo
console.log("Extensão do arquivo: " + path.extname(__filename));

//Criar um objeto path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, "testando", "vitor.js"));
