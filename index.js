const express = require("express"),
        app = express(),
        hostname = "127.0.0.1",
        port = 3000,
        routes = require("./routes.js"),
        mongoose = require("mongoose"),
        User = require("./models/UserModel");

mongoose.connect("mongodb://localhost/users_db");

routes(app);
app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
