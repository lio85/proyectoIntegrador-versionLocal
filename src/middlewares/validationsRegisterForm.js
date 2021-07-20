const {body}= require('express-validator');

const validations=[
    body('name').notEmpty().withMessage('Este campo no puede quedar vacío'),
    body('surname').notEmpty().withMessage('Este campo no puede quedar vacío'),
    body('email').isEmail().withMessage('Debe ingresar una dirección de correo electrónico')   
]

module.exports= validations;