const { Router } = require("express");
const validateJWT = require('../middlewares/validate-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");

const router = Router();

// Todas las rutas tienen que tener el middleware de validación de JWT
router.use(validateJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear evento
router.post('/', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

module.exports = router;