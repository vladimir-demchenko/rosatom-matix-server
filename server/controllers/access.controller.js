const db = require('../models/');

exports.createAccess = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    await db.Access.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.getAllAccesses = async (req, res) => {
    await db.Access.findAll({ 
        include: [
            {model: db.User},
            { model: db.IS},
            { model: db.Resource},
            { model: db.Role}
        ]
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.delete = async (req, res) => {
    const id = req.params.id;

    await db.Access.destroy({
        where: {id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'Successfully deleted'
            });
        } else {
            res.send({
                message: `Cannot delete with id = ${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.update = async (req, res) => {
    const id = req.params.id;

    await db.Access.update(req.body, {
        where: {id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: 'Successfully update'
            });
        } else {
            res.send({
                message: `Cannot update with id = ${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}