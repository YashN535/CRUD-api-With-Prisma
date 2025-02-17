require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const userRouter = require("./Routes/userRoutes");
const postRouter = require("./Routes/postRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie middleware
app.use(cookieParser());

// Routes

app.use("/api", userRouter);
app.use("/api", postRouter);

// Start Server

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
