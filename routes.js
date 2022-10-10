const users = [{name:"user1", age:"16"},
                {name:"user2", age:"18"},
                {name:"user3", age:"17"}];

module.exports = function(app){
    app.get("/", (req, res)=>{
        res.send("<h1>Hello</h1>");
    });
    
    app.get("/users", (req, res)=>{
        res.json(users);
    })
}                
