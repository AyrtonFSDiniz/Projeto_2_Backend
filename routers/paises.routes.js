const express = require("express");
const router = express.Router();
const Pais = require("./../model/pais");

const listaPaises = [
  {
    Nome: "Canada",
    Populacao: 38295863,
    Lingua_mae: "inglês e francês",
    PIB: 1643000000,
  },
  {
    Nome: "França",
    Populacao: 67390000,
    Lingua_mae: "francês",
    PIB: 2603000000,
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ message: "Rota Países operante" });
});

router.get("/listall", async (req, res) => {
  await Pais.find({})
    .then((pais) => {
      res.status(200).json(pais);
    })
    .catch((err) => {
      res.status(404).json({ message: "Not found" });
      console.error(err);
    });
});

router.get("/listname/:nome", async (req, res) => {
  const nome = req.params.nome;
  await Pais.findOne({ Nome: nome })
    .then((pais) => {
      if (pais == null) {
        res.status(404).json({ message: "Nome de Pais não encontrado" });
      } else {
        res.status(200).json(pais);
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Not found" });
      console.error(err);
    });
});

router.post("/create", async (req, res) => {
  const pais = req.body;

  if (!pais.Nome) {
    res
      .status(400)
      .json({ message: "Nome do País cadastrado não pode ser vazio" });
    return;
  }
  if (!pais.Populacao) {
    res
      .status(400)
      .json({ message: "População do País cadastrado não pode ser vazio!" });
    return;
  }
  if (!pais.Lingua_mae) {
    res
      .status(400)
      .json({ message: "Lingua mãe do Pais cadastrado não pode ser vazia!" });
    return;
  }
  if (!pais.PIB) {
    res
      .status(400)
      .json({ message: "PIB do País cadastrado não pode ser vazio!" });
    return;
  }
  const cadastro = await new Pais(pais).save();
  res
    .status(201)
    .json({ message: `Pais ${pais.Nome} cadastrado com sucesso!` });
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const paisx = req.body;

  if (!id) {
    res.status(400).json({ message: "Falta ID na URL" });
    return;
  }
  if (!paisx.Nome) {
    res
      .status(400)
      .json({ message: "Nome do País cadastrado não pode ser vazio" });
    return;
  }
  if (!paisx.Populacao) {
    res
      .status(400)
      .json({ message: "População do País cadastrado não pode ser vazio!" });
    return;
  }
  if (!paisx.Lingua_mae) {
    res
      .status(400)
      .json({ message: "Lingua mãe do Pais cadastrado não pode ser vazia!" });
    return;
  }
  if (!paisx.PIB) {
    res
      .status(400)
      .json({ message: "PIB do País cadastrado não pode ser vazio!" });
    return;
  }
  await Pais.updateOne({ _id: id }, paisx)
    .then(() => {
      res.status(200).json({ message: "Atualizado com sucesso!" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro!" });
    });
});

router.delete("/delete/:id", async (req, res) => {
  await Pais.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: `Pais excluído com sucesso!` });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro!" });
    });
});

module.exports = router;
