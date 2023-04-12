const mongoose = require("mongoose");

const discoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },

  grupoosol: {
    type: String,
    required: true,
    trim: true,
  },

  estilo: {
    type: String,
    required: true,
    trim: true,
  },

  fecha: {
    type: String,
    required: true,
    trim: true,
  },

  ventas: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Discos", discoSchema);
