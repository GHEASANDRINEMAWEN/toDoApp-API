const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const toDoRoute = require('./routes/toDoRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('dotenv').config()


var app = express();
 
const port = 5000

// JSON body parser 
app.use(express.json())
// morgan HTTP logger
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Welcome to this to Do App!')
})

app.use('/task', toDoRoute) 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const username = 'gheasandrine';
const password = 'hhHAFVKRz2rkuv7k';
const cluster =  'cluster0.z4ig1';
const dbname = 'toDoApp';

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// test MongoDB connection
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(bodyParser.json());



