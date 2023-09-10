const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port "+(process.env.PORT || 3000));
  });
});
