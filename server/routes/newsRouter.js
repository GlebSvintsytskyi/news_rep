const Router = require('express');
const router = new Router;
const newsController = require('../controllers/newsController');

router.post('/', newsController.create);
router.put('/:id', newsController.change);
router.delete('/:id', newsController.delete);
router.get('/:id', newsController.getOne);

module.exports = router;