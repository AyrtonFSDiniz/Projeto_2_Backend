const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const paisModel = new mongoose.Schema({
    Nome: { type:String, required: true },
    Populacao: {type:Number, required: true },
    Lingua_mae: { type: String, required: true },
    PIB: {type:Number, required: true }
});

const Pais = mongoose.model("pais", paisModel);

module.exports = Pais;