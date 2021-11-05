const express = require("express");
const app = express();

app.use(express.json());

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const port = 3000;

const estadosRouter = require("./routers/estados.routes");
app.use('/estados',estadosRouter);

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades',cidadesRouter);


app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});