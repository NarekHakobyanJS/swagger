// /**
//  * @openapi
//  * /users:
//  *   get:
//  *     summary: Get all users
//  *     description: Returns a list of users with pagination (query params).
//  *     parameters:
//  *       - in: query
//  *         name: page
//  *         schema:
//  *           type: integer
//  *         description: Page number for pagination
//  *       - in: query
//  *         name: limit
//  *         schema:
//  *           type: integer
//  *         description: Number of users per page
//  *     responses:
//  *       200:
//  *         description: A list of users
//  *
//  *   post:
//  *     summary: Create a new user
//  *     description: Creates a new user with the provided data.
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - name
//  *               - email
//  *             properties:
//  *               name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: User created successfully
//  *
//  * /users/{id}:
//  *   get:
//  *     summary: Get user by ID
//  *     description: Returns a single user by ID (URL param).
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: The user ID
//  *     responses:
//  *       200:
//  *         description: A single user
//  *       404:
//  *         description: User not found
//  *
//  *   put:
//  *     summary: Update user by ID
//  *     description: Updates a user's data by ID.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: The user ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               name:
//  *                 type: string
//  *               email:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: User updated successfully
//  *
//  *   delete:
//  *     summary: Delete user by ID
//  *     description: Deletes a user from the system.
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: The user ID
//  *     responses:
//  *       200:
//  *         description: User deleted successfully
//  */





// // /users (GET)

// // summary → կարճ նկարագրություն

// // description → լրացուցիչ բացատրություն

// // parameters → query params են (օր. ?page=1&limit=10)

// // 🔹 /users (POST)

// // requestBody → json data body-ն նկարագրում է (օր. { "name": "John", "email": "john@mail.com" })

// // 🔹 /users/{id} (GET)

// // parameters → այստեղ in: path նշանակում է URL param (/users/123)

// // 🔹 /users/{id} (PUT)

// // Նույնպես URL param ունի (id), + requestBody update-ի համար։

// // 🔹 /users/{id} (DELETE)

// // Միայն URL param-ով user ջնջելու համար։
