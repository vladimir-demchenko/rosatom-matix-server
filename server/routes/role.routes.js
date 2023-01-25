module.exports = app => {
    const role = require('../controllers/role.controller');

    let router = require('express').Router();

    router.get('/', role.getAll);
    router.post('/', role.create);
    router.delete('/:id', role.delete);
    router.put('/:id', role.update);

    app.use('/api/role', router);
}