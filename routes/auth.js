/*
    Rutas de usuarios / auth
    host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { crearUsuario, loginUsuario, revalidarToken } = require("../controllers/auth");
const fieldValidator = require("../middlewares/fieldValidator");
const router = Router();

router.post(
    "/new",
    [ // Middlewares
        check("name", "El nombre es obligatorio").not().isEmpty(),
        check("email", "El email es obligatorio").isEmail(),
        check("password", "La contraseña debe de tener por lo menos 6 caracteres").isLength({ min: 6 }),
        fieldValidator
    ],
    crearUsuario
)

router.post(
    "/",
    [ // Middlewares
        check("email", "El email es obligatorio").isEmail(),
        check("password", "La contraseña debe de tener por lo menos 6 caracteres").isLength({ min: 6 }),
        fieldValidator
    ],
    loginUsuario
)

router.get("/renew", revalidarToken)


module.exports = router;