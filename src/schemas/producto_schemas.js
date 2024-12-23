const Joi = require('joi')


const productoSchema = Joi.object().keys({
    nombre: Joi.string().trim().required().min(3).max(25).messages({
        "string.min": `El campo nombre debe tener al menos {#limit} caracteres`,
        "string.max": `El campo nombre debe tener como maximo {#limit} caracteres`,
        "string.empty": "El campo nombre no puede ser vacio",
        "any.required": "El campo nombre es requerido",
    }),
    descripcion: Joi.string().max(120).messages({
        "string.max": `El campo descripcion debe tener como máximo {#limit} caracteres`,
    }),
	precio: Joi.number().required().messages({
		"number.base": "El campo precio debe ser un número",
		"any.required": "El campo precio es requerido"
	}),
	pathImg: Joi.string().messages({
        "string.empty": "se requiere una imagen",
	})
});

module.exports = productoSchema;
