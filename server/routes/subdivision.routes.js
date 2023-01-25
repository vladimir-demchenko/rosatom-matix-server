module.exports = app => {
    const subdivision = require('../controllers/subdivision.controller');

    let router = require('express').Router();

    router.get('/', subdivision.getAll);
    router.post('/', subdivision.create);
    router.delete('/:id', subdivision.delete);
    router.put('/:id', subdivision.update);

    app.use('/api/subdivision', router);
}