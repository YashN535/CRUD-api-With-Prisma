const prisma = require("../prisma/index");

// create a new post

exports.createPost = async (req, res, next) => {
  try {
    const { slug, title, body } = req.body;
    // Use the authenticated user's id from req.user
    const authorId = req.user && req.user.id;
    if (!authorId) {
      return res.status(400).json({ error: "Author ID is required." });
    }
    const result = await prisma.post.create({
      data: {
        slug,
        title,
        body,
        author: { connect: { id: authorId } },
      },
    });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

//update an existing post

exports.updatePost = async (req, res, next) => {
  const { id } = req.params;
  const { title, body } = req.body;

  try {
    const result = await prisma.post.update({
      where: { id: id },
      data: {
        title: title,
        body: body,
      },
    });
    res.json(result);
  } catch (error) {
    console.error("Update Error:", error);
    res.status(404).json({ error: `Post with ${id} does not exist` });
  }
};

//delete a post

exports.deletePost = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await prisma.post.delete({
      where: { id: id },
    });
    res.json(result);
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(404).json({ error: `Post with ${id} does not exist` });
  }
};

//get all post

exports.getPosts = async (req, res, next) => {
  try {
    const result = await prisma.post.findMany();
    res.json(result);
  } catch (error) {
    res.json({ error: `NO post was found` });
  }
};
