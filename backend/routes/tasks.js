var express = require('express');
var router = express.Router();
var controller = require('../controller/task');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get ('/', controller.getAll);
router.post ('/', controller.post);
router.put ('/:id', controller.put);
router.delete ('/:id', controller.delete);

module.exports = router;