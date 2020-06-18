const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: { type: Number, index: true, required: true },
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
},
{
  timestamps: true,
},
);

const model = mongoose.model('products', ProductSchema);

module.exports = model;
