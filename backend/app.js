const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
    id: '123klj',
    title: 'First server-side post',
    content: 'This is coming from the server!'
    },
    {
      id: '23k4jlkj',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
      }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
