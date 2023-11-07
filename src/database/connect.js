const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORLD}@cursonodejs.arzwtu8.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão com o banco de dados estabelecida com sucesso!!");
  } catch (error) {
    console.error("Erro ao se conectar ao banco de dados: ", error);
  }
};

module.exports = connectToDataBase;
