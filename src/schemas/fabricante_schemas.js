const Joi = require("joi");

const fabricanteSchema = Joi.object().keys({
    nombre: Joi.string().trim().required().min(3).max(25).pattern(/^[\w.,á-úÁ-Ú\s]+$/).messages({
        "string.min": `El campo nombre debe tener al menos {#limit} caracteres`,
        "string.max": `El campo nombre debe tener como maximo {#limit} caracteres`,
        "string.empty": "El campo nombre no puede ser vacio",
        "string.pattern.base": "El nombre solo debe contener letras",
        "any.required": "El campo nombre es requerido"
    }),
    direccion: Joi.string().trim().required().min(5).max(30).pattern(/^[\w.,á-úÁ-Ú\s]+$/).messages({
        "string.min": `El campo descripcion debe tener al menos {#limit} caracteres`,
        "string.max": `El campo descripcion debe tener como máximo {#limit} caracteres`,
        "string.empty": "El campo descripcion no puede ser vacío",
        "string.pattern.base":"El campo descripción solo debe contener letras, números, espacios y los caracteres ., ",
        "any.required": "El campo descripcion es requerido"
    }),
    numeroContacto: Joi.number().required().messages({
        "number.integer": "El campo numeroContacto debe ser un número entero",
        "any.required": "El campo numeroContacto es requerido"
    }),
    pathImgPerfil: Joi.string().required().uri().messages({
        "string.uri": "El campo pathImgPerfil debe ser una URL válida",
        "any.required": "El campo pathImgPerfil es requerido"
    }),
});

module.exports = fabricanteSchema;
