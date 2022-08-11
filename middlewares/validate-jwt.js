const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha proporcionado token'
        });
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        console.error(error);
        res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });    
    }

    next();
}

module.exports = validateJWT;