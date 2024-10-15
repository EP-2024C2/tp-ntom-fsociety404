const Joi = require("joi");

const componenteSchema = Joi.object().keys({
    nombre: Joi.string().trim().required().min(3).max(25).pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).messages({
        "string.min": `El campo nombre debe tener al menos {#limit} caracteres`,
        "string.max": `El campo nombre debe tener como maximo {#limit} caracteres`,
        "string.empty": "El campo nombre no puede ser vacio",
        "string.pattern.base": "El nombre solo debe contener letras",
        "any.required": "El camponombre es requerido",
    }),
    descripcion: Joi.string().trim().required().min(15).max(120).pattern(/^[a-zA-Z0-9\s.,]+$/).messages({
        "string.min": `El campo descripcion debe tener al menos {#limit} caracteres`,
        "string.max": `El campo descripcion debe tener como máximo {#limit} caracteres`,
        "string.empty": "El campo descripcion no puede ser vacío",
        "string.pattern.base": "El campo descripcion solo debe contener letras, números, espacios y los caracteres ., ",
        "any.required": "El campo descripcion es requerido",
    }),
});

module.exports = componenteSchema;

// nombre - descripcion

