const Router = require('express');
const router = new Router;
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, newsController.create);
router.put('/:id', authMiddleware, newsController.change);
router.delete('/:id', authMiddleware, newsController.delete);
router.get('/', newsController.getAll);

module.exports = router;