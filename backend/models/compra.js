const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const compraSchema = Schema({

  usuario: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: "usuario" },

    compraItems: [ {

      consecutivo: {
        type: Number,
        require: true,
        unique: true,
      },

      fecha: {
        type: Date,
        require: true,
      },

      stock: {
        type: {
          tallas: {
            type: Map,
            of: Number
          },total: {
            type: Number,
            required: true
          }
        }},

      precio: { 
        type: Number,
         required: true 
        },

      articulo: {
        type: Schema.Types.ObjectId,
        ref: "Articulo",
        require: true,
      },
}],

      cantidadProductos: { 
        type: Number,
         required: true 
        },

      estado: {
        type: String,
        require: true,
      },

      direccionDomicilio: {
        direccion: {
          type: String,
          required: true,
        },
        ciudad: {
          type: String,
          required: true,
        },
        barrio: {
          type: String,
        },
        codigoPostal: {
          type: Number,
        },
        observaciones: {
          type: String,
        }
      },
      
      metodoPago: {
        type: String,
        require: true,
      },

      resultadoPago: {
        id: { type: String },
        estado: { type: String },
        update_time: { type: String },
        correo: { type: String },
      },

      precioArticulos: {
        type: Number,
        required: true,
        default: 0.0,
      },

      precioTotal: {
        type: Number,
        required: true,
        default: 0.0,
      },

      isPago: {
        type: Boolean,
        required: true,
        default: false,
      },

      paidAt: {
        type: Date,
      },

      isDelivered: {
        type: Boolean,
        required: true,
        default: false,
      },
  
      deliveredAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );


module.exports = model("compra", compraSchema,"compras");
