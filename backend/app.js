const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const postsRoutes = require('./routes/posts');

const app = express();

const mongoDBpw = process.env.mongoDBpw;

mongoose.connect(`mongodb+srv://Jake:${mongoDBpw}@cluster0.0cpxl.mongodb.net/Cluster0?retryWrites=true&w=majority`)
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
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
