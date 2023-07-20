const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

mongoose.connect(process.env.dbURI).then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening");
  });
});
