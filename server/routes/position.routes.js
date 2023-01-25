module.exports = app => {
    const position = require('../controllers/position.controller');

    let router = require('express').Router();

    router.get('/', position.getAll);
    router.post('/', position.create);
    router.delete('/:id', position.delete);
    router.put('/:id', position.update);

    app.use('/api/position', router);
}