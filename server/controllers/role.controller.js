const db = require('../models/');

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    await db.Role.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

exports.getAll = async (req, res) => {
    await db.Role.findAll({ include: [{ model: db.Resource }] })
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

    await db.Role.destroy({
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

    await db.Role.update(req.body, {
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
};