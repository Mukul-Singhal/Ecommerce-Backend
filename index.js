const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URl)
  .then(() => console.log("Database connection is succesfull 🚀"))
  .catch((err) => console.log(err));

app.use("/api", userRouter);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
