const Router = require('express');
const router = new Router;
const newsController = require('../controllers/newsController');
const authMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});

router.post('/', authMiddleware, upload.single('img'), newsController.create);
router.put('/:id', authMiddleware, newsController.change);
router.delete('/:id', authMiddleware, newsController.delete);
router.get('/', newsController.getAll);
router.get('/:id', newsController.getOne);

module.exports = router;