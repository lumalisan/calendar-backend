const { response } = require('express');
const Usuario = require('../models/Usuario');

const crearUsuario = (req, res = response) => {
    
    const { name, email, password } = req.body;

    const usuario = new Usuario(req.body);
    

    res.status(201).json({
        ok: true,
        msg: 'Usuario creado',
        usuario: {
            name,
            email,
            password
        }
    });
}

const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;
    
    res.status(200).json({
        ok: true,
        msg: 'Login correcto'
    });
}

const revalidarToken = (req, res = response) => {
    res.json({
        msg: 'Token válido'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}