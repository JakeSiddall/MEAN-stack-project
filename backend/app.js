const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/posts');

const app = express();

//MongoDB pw: x9C9xc22jlXG46UO

mongoose.connect('mongodb+srv://Jake:x9C9xc22jlXG46UO@cluster0.0cpxl.mongodb.net/Cluster0?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
    );
  next();
});


app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: 'Post added successfully!'
  });
});


app.use('/api/posts', (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: documents
      });
    });
});

module.exports = app;
