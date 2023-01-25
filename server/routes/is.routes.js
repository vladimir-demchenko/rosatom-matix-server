module.exports = app => {
    const is = require('../controllers/is.controller');

    let router = require('express').Router();

    router.get('/', is.getAll);
    router.post('/', is.create);
    router.delete('/:id', is.delete);
    router.put('/:id', is.update);

    app.use('/api/is', router);
}