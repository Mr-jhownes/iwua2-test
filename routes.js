const express = require('express');
router = express.Router();

var itemControl = require('./itemController'),
userCtrl = require('./user-controller');

router.get('/hello', itemControl.getWorld);

router.get('/hello/:foo/:bar', itemControl.getWorldParams);

router.post('/hello', itemControl.postWorld);

router.post('/users', userCtrl.createUser);

router.get('/users', userCtrl.getUsers);
router.get('/users/:id', userCtrl.getUser);
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);
    module.exports = router;