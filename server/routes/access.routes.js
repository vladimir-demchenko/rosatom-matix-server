module.exports = app => {
    const access = require('../controllers/access.controller');

    let router = require('express').Router();

    router.get('/', access.getAllAccesses);
    router.post('/', access.createAccess);
    router.delete('/:id', access.delete);
    router.put('/:id', access.update);

    app.use('/api/access', router);
}