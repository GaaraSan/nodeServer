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
    app.get("/users-by-age/:from/:to", userController.getUsersByAge);
    app.get("/user-heights", userController.getHeightsUser);
    app.post("/user", userController.addUser);
    app.delete("/user/:userId", userController.removeUser);
    app.delete("/remove-doc", userController.removeEmptyDocument);
    app.put("/user/:userId", userController.updateUser);
    app.put("/add-height", userController.addFieldHeight);
    
}                
