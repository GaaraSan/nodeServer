const express = require("express"),
        app = express(),
        hostname = "127.0.0.1",
        port = 3000,
        routes = require("./routes.js"),
        mongoose = require("mongoose"),
        User = require("./models/UserModel"),
        swaggerJsDoc = require("swagger-jsdoc"),
        swaggerUI = require("swagger-ui-express"),
        bodyParser = require("body-parser");
        

mongoose.connect("mongodb://localhost/users_db");
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "API for users",
            description: "users",
            servers:["http://localhost:3000/"]
        },
    },
    apis: ["./routes.js"],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   });

routes(app);
app.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
