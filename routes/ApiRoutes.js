const express = require('express');
const ApiTeste = require('../Controller/ApisController');
const router = express.Router();

router.get('/', ApiTeste.home);
router.post('/new', ApiTeste.create);
router.put('/alterar', ApiTeste.refresh);
router.delete('/del/:id', ApiTeste.deletando);



module.exports = router;