module.exports = app => {
    const department = require('../controllers/department.controller');

    let router = require('express').Router();

    router.get('/', department.getAll);
    router.post('/', department.create);
    router.delete('/:id', department.delete);
    router.put('/:id', department.update);

    app.use('/api/department', router);
}