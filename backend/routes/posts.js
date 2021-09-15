const express = require("express");

const Post = require('../models/posts');
const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

const PostController = require("../controllers/posts");

const router = express.Router();



router.post("", checkAuth, extractFile, PostController.CreatePost);

router.put("/:id", checkAuth, extractFile, PostController.UpdatePost);

router.get("", PostController.GetPosts);

router.get("/:id", PostController.GetPost);

router.delete("/:id", checkAuth, PostController.DeletePost)

module.exports = router;
