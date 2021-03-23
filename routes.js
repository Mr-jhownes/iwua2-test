const express = require('express');
router = express.Router();

var itemControl = require('./itemController');

router.get('/hello', itemControl.getWorld);

router.get('/hello/:foo/:bar', itemControl.getWorldParams);

router.post('/hello', itemControl.postWorld);

    module.exports = router;