const Router = require('express');
const userControler = require('../controlers/userControler');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router;

router.post('/registration', userControler.registration);
router.post('/login', userControler.login);
router.get('/auth', authMiddleware, userControler.check);

module.exports = router;