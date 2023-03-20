import { Schema, model } from "mongoose";
const celularEsquema = new Schema(
    {
        clave: {
            type: String,
            required: true,
            trim: true,
        },
        marca: {
            type: String,
            required: true,
            trim: true,
        },
        precio:{
            type: Number,
            required: true,
            trim: true,
        },
        fechaLanzamiento:{
            type: Date,
            required: true,
            trim: true,
        },
        ram:{
            type: Number,
            required: true,
            trim: true,
        },
        almacenamiento:{
            type: Number,
            required: true,
            unique: true,
            trim: true,
        },
        cantCamaras:{
            type: Number,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);
//modelo de datos como quiero que se llame la collection
export default model("Celular", celularEsquema);