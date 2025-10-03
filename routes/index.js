var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Ստանալ բոլոր օգտատերերին
 *     description: Վերադարձնում է օգտատերերի ցուցակը՝ էջավորման աջակցությամբ։
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Էջի նիշան (pagination)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Քանի օգտատեր յուրաքանչյուր էջում
 *     responses:
 *       200:
 *         description: Օգտատերերի ցուցակն առկա է (OK)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Narek Hakobyan"
 *                       email:
 *                         type: string
 *                         example: "narek@example.com"
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 total:
 *                   type: integer
 *                   example: 52
 *       400:
 *         description: Սխալ query պարամետրեր
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid query parameters"
 *       404:
 *         description: Օգտատերեր չեն գտնվել
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No users found"
 *       500:
 *         description: Ներքին սերվերի սխալ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */

router.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Returns a single user based on the provided ID.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: Successfully retrieved user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *       400:
 *         description: Invalid ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Invalid ID
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: User not found
 */

router.get('/:id', (req, res) => {
  res.send('Hello World!');
});


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Update user credentials / authenticate user (example)
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword123
 *           examples:
 *             loginExample:
 *               summary: Example body
 *               value:
 *                 email: user@example.com
 *                 password: strongPassword123
 *     responses:
 *       200:
 *         description: OK - action successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ok
 *       400:
 *         description: Bad request - validation failed / missing fields
 *       401:
 *         description: Unauthorized - wrong credentials
 *       404:
 *         description: Not Found - user not found
 *       500:
 *         description: Internal server error
 */

router.post('/:id', (req, res) => {
  const {email, passowrd} = req.body
  res.send('ok')
})


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Ստանալ բոլոր օգտատերերին
 *     description: Վերադարձնում է օգտատերերի ցուցակը՝ էջավորման աջակցությամբ։
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Էջի նիշան (pagination)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Քանի օգտատեր յուրաքանչյուր էջում
 *     responses:
 *       200:
 *         description: Օգտատերերի ցուցակն առկա է (OK)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "Narek Hakobyan"
 *                       email:
 *                         type: string
 *                         example: "narek@example.com"
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 total:
 *                   type: integer
 *                   example: 52
 *       400:
 *         description: Սխալ query պարամետրեր
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid query parameters"
 *       404:
 *         description: Օգտատերեր չեն գտնվել
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No users found"
 *       500:
 *         description: Ներքին սերվերի սխալ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */



router.delete('/:id', (req, res) => {

})
module.exports = router;
