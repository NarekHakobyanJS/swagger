var express = require('express');
var router = express.Router();


//// Sra masin kasem 

/**
 * @swagger
 * /users:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */

router.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;
