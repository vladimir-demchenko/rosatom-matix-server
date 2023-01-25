module.exports = app => {
    const user = require('../controllers/user.controller');

    let router = require('express').Router();

    router.get('/', user.getAll);
    router.post('/', user.create);
    router.delete('/:id', user.delete);
    router.put('/:id', user.update);

    app.use('/api/user', router);
}