module.exports = app => {
    const resource = require('../controllers/resource.controller');

    let router = require('express').Router();

    router.get('/', resource.getAll);
    router.post('/', resource.create);
    router.delete('/:id', resource.delete);
    router.put('/:id', resource.update);

    app.use('/api/resource', router);
}