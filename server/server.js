require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();
const router = require('./router/auth-router')
const contactRoute = require("./router/contact-router")
const connectDb = require("./utils/db")


const corsOptions = {
    origin: "https://jobsearch-frontend-o.onrender.com",
    methods: "GET, POST, PUT ,DELETE, PATCH, HEAD",
    Credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRoute);


// app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    })
})
