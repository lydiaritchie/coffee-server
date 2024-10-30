const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const brewRouter = require("./brew/brew.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/brew", brewRouter);
app.use(notFound);
app.use(errorHandler);


module.exports = app;