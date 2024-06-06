import express from "express";

const router = express.Router();
const blogPosts = [
  {
    id: 1,
    title: "A blog post",
    content: "This is the content!.",
  },
  {
    id: 2,
    title: "Another blog post",
    content: "Lorem Ipsum.",
  },
];


router.get("/", (req, res) => {
  res.json(blogPosts);
});

router.get("/:id", (req, res) => {
  const blogPost = blogPosts.find((b) => b.id === parseInt(req.params.id));
  if (blogPost) {
    res.json(blogPost);
  } else {
    res.status(404).send(  "Blog post not found" );
  }
});

export default router;
