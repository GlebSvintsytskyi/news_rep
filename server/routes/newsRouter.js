const Router = require('express');
const router = new Router;
const newsControler = require('../controlers/newsControler');

router.post('/', newsControler.create);
router.put('/:id', newsControler.change);
router.delete('/:id', newsControler.delete);
router.get('/:id', newsControler.getOne);

module.exports = router;