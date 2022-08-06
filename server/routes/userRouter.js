const Router = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { check } = require('express-validator');
const router = new Router;

router.post('/registration', [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Uncorrect password').isLength({min: 3, max: 12})
], userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;