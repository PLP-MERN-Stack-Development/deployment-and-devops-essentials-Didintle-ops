const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');


router.get('/', controller.getAll);
router.post('/', controller.create);
router.patch('/:id/toggle', controller.toggle);
router.delete('/:id', controller.delete);


module.exports = router;
