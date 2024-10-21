const Joi = require("joi");

const componenteSchema = Joi.object().keys({
    nombre: Joi.string().trim().required().min(3).max(25).messages({
        "string.min": `El campo nombre debe tener al menos {#limit} caracteres`,
        "string.max": `El campo nombre debe tener como maximo {#limit} caracteres`,
        "string.empty": "El campo nombre no puede ser vacio",
        "any.required": "El campo nombre es requerido",
    }),
    descripcion: Joi.string().messages({
    }),
});

module.exports = componenteSchema;

// nombre - descripcion

