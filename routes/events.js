const { Router } = require("express");
const { check } = require('express-validator');

const fieldValidator = require('../middlewares/field-validator');
const validateJWT = require('../middlewares/validate-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");

const router = Router();

// Todas las rutas tienen que tener el middleware de validación de JWT
router.use(validateJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear evento
router.post('/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha de fin es obligatoria').custom(isDate), 
        fieldValidator
    ],
    crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;