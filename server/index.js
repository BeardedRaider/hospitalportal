const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();/* dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. */


const app = express();/* Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open-source framework developed and maintained by the Node.js foundation. */
const PORT = process.env.PORT || 5000;/* process.env.PORT is used to get the port number from the environment where the server is hosted. If the server is hosted on a local machine, then the port number will be 5000. */

app.use(express.json());/* express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json()); */
app.use(cors());/* CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. */

const MONGO_URI = process.env.MONGO_URI;/* process.env.MONGO_URI is used to get the MongoDB URI from the environment where the server is hosted. */
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});/* mongoose.connect() is used to connect to the MongoDB database. */

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});/* mongoose.connection.on() is used to check if the connection is successful. */

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});/* app.listen() is used to start the server. */
