const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const PORT = 3000;
const recipeRoute = require(path.join(__dirname, '/routes/recipeRoute'));
const apiRoute = require(path.join(__dirname, '/routes/apiRoute'));

// Connect to mongoDB database
// options object is passed in to ensure the latest features and behaviors are used when connecting to the MongoDB database
mongoose.connect('mongodb+srv://triciayeh1203:test123456@cluster0.zoqjbuz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(`Fail to connect to DB, ${err}`))


//TODO: serve all static files

// Parse request body
app.use(express.json());

// middleware to check the request comes in's request path and method
app.use ((req, res, next) => {
  console.log('req.path:', req.path, 'req.method:', req.method);
  next();
})

// Set up routes
// route to serve requests sent to /api (homepage)
app.use('/api', apiRoute);

// route to serve requests sent to /user/recipe
app.use('/user/myrecipe', recipeRoute);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Listening to port 3000
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))

