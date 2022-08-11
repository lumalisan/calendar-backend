const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        // Comprobar si el usuario existe
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save()

        // Generar json web token
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            msg: 'Usuario creado correctamente',
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }

}

const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });

        // Comprobar si el usuario existe
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        // Generar json web token
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(200).json({
            ok: true,
            msg: 'Login correcto',
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }

}

const revalidarToken = async (req, res = response) => {

    const { uid, name } = req;

    // Generar un nuevo token y retornarlo al cliente
    const token = await generarJWT(uid, name);

    res.json({
        msg: 'Token válido',
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}