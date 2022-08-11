const { response } = require('express');

const getEventos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eventos'
    });
}

const crearEvento = (req, res = response) => {
    // let body = req.body;
    // let event = new Event({
    //     title: body.title,
    //     description: body.description,
    //     price: body.price,
    //     date: body.date,
    //     user: body.user
    // });

    // event.save((err, eventSaved) => {
    //     if (err) {
    //         return res.status(500).json({
    //             ok: false,
    //             err
    //         });
    //     }

    //     res.json({
    //         ok: true,
    //         event: eventSaved
    //     });
    // }).populate('user', 'name email');

    res.json({
        ok: true,
        msg: 'Eventos'
    });
}

const actualizarEvento = (req, res = response) => {
    // let id = req.params.id;
    // let body = req.body;
    // Event.findByIdAndUpdate(id, body, { new: true }, (err, eventUpdated) => {
    //     if (err) {
    //         return res.status(500).json({
    //             ok: false,
    //             err
    //         });
    //     }

    //     res.json({
    //         ok: true,
    //         event: eventUpdated
    //     });
    // }).populate('user', 'name email');

    res.json({
        ok: true,
        msg: 'Eventos'
    });
}

const eliminarEvento = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Evento eliminado'
    });
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}