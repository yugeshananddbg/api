const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

//route import
const expense = require("./routes/expenseRoute.js");
app.use("/api/v1/", expense);

module.exports = app;
