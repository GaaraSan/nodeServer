const User = require("./models/UserModel"),
    userController = require("./controllers/UserController");

module.exports = function(app){
/** 
 * @swagger
 *   /user:
 *       get:
 *          tags: [user]
 *          description: 'get all users'
 *          responses:
 *              200:
 *                  description: 'success'
 *              content:
 *               application/json:
 *               schema:
 *                   type: 'array'
 *                   items:
 *                      properties:
 *                       name:
 *                        type: 'string'
 *                        example: 'Artem'
 *                       age:
 *                        type: 'integer'
 *                        example: '18'
*/
    app.get("/user", userController.getListOfUsers);
    app.get("/user/:name", userController.getUsersByName);
    app.post("/user", userController.addUser);
}                
