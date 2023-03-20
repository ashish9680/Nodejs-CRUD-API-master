// Initial express
const express = require('express')
const app = express();

const bodyParser = require('body-parser');


// Enviremental Variable
require('dotenv/config');

// All Routes Goes Here
var postRouter = require('./Routes/posts');

// Database connection
var mongoose = require('mongoose')
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })

// All routes created here
app.get('/', (req, res, next) => {
     res.send('Homepage is still working...')
})

app.use(bodyParser.json());
app.use('/posts', postRouter);
app.listen(3000);