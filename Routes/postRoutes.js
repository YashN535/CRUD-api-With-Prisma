const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getPosts,
} = require("../Controllers/postControllers");
const router = express.Router();

const isLoggedIn = require("../Middleware/isLoggedIn");

router.route("/post/create").post(isLoggedIn, createPost);

router.route("/post/update/:id").put(isLoggedIn, updatePost);

router.route("/post/delete/:id").delete(isLoggedIn, deletePost);

router.route("/post/get").get(getPosts);

module.exports = router;
