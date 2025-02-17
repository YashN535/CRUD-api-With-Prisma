const cookieParser = require("cookie-parser");
const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie middleware
app.use(cookieParser());

const userRouter = require("./Routes/userRoutes");
const postRouter = require("./Routes/postRoutes");

app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
