// const users = [{name:"user1", age:"16"},
//                 {name:"user2", age:"18"},
//                 {name:"user3", age:"17"}];

User = require("./models/UserModel")

module.exports = function(app){
    app.get("/", (req, res)=>{
        User.find((err, users)=>{
            if(err)
                res.send(err);
            res.json(users);
        });
    })
    
    app.post("/", (req, res)=>{
        res.send(users);
    })
}                
