const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Pagina inicial" });
});

const paisesRouter = require("./routers/paises.router");
app.use("/paises", paisesRouter);

const estadosRouter = require("./estados.router");
app.use("/estados", estadosRouter);

const cidadesRouter = require("./cidades.router");
app.use("/cidades", cidadesRouter);

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
