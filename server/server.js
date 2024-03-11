require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const cors = require("cors");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// let's tackle cors problem
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT,DELETE, PATCH, HEAD",
    credentials: true,
};


app.use(cors(corsOptions));


app.use(express.json());

// Mount the router: to use the router in your main express app, you can "moubt" it at a specific URL prefix

app.use("/api/auth", authRoute);
app.use("/api/form/", contactRoute);

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to mern website");
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to register page");
// });

//error middleware
app.use(errorMiddleware);


const PORT = 5000;

connectDb().then(() => {
app.listen(PORT, () => {
    console.log('server is running at port : ' + PORT);

});
});


