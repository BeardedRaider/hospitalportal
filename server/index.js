const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();/* dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. */
const User = require('./models/User');/* User is a model that is used to create a new user. */
require('./models/Department');/* Department is a model that is used to create a new department. */


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

app.post('/api/register', async (req, res) => {
    try {
      const { patient_number, password } = req.body;
  
      // Check if the patient already exists
      const existingUser = await User.findOne({ patient_number });
      if (existingUser) {
        return res.status(400).json({ error: 'patient already registered' });
      }
  
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user instance and save it to the 'users' collection
      const newUser = new User({ patient_number, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
//Route to handle user data
app.get('/api/users', async (req, res) => {
try {
// Extract the token from the request headers
const token = req.headers.authorization?.split(' ')[1];

if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
}

// Verify the token
jwt.verify(token, 'your-secret-key', async (err, decoded) => {
    if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    // Find user by decoded userId and populate associated department details 
    const user = await User.findById(decoded.userId).populate('department_id');

    if (!user) {
        return res.status(484).json({ error: 'User not found' });
    }
//CHEECK WITH KAREN IF THIS IS RIGHT
    // Return formatted user data 
    const formattedUser = { 
    _id: user._id, 
    email: user.email,
    firstname: user.firstname,
    surname: user.surname,
    guardian: user.guardian,
    guardian_name: user.guardian_name,
    notes: user.notes,
    dob: user.dob,
    patient_number: user.patient_number, 
    appointment_date: user.appointment_date, 
    appointment_notes: user.appointment_notes, 
    department_id: user.department_id ? { 
        name: user.department_id.name, 
        details: user.department_id.details, 
        consultant: user.department_id.consultant, 
        nurse: user.department_id.nurse,
        consultant_img: user.department_id.consultant_img, nurse_img: user.department_id.nurse_img,
        img_one: user.department_id.img_one,
        img_two: user.department_id.img_two, 
        img_three: user.department_id.img_three, 
        map: user.department_id.map,
        } : null,
    };

        res.json(formattedUser); // Send formatted user data as json response
    });
    } catch (error) {
        console.error(error); // Log error to console
        res.status(500).json({ error: 'Server error' });// Send error response
    }
});

//Route to handle user login
app.post('/api/login', async (req, res) => {
    try {
        const { patient_number, password } = req.body; // Extract patient_number and password from request body
        const user = await User.findOne({ patient_number }); // Find user by patient_number

        if (!user) {
            return res.status(404).json({ error: 'Invalid login details' }); // Send error response if user not found
        }

        const passwordMatch = await bcrypt.compare(password, user.password); // Compare password with hashed password

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid login details' }); // Send error response if password does not match
        }

        // Create a token with user id JWT token
        const tokenPayload = { 
            userId: user._id,
        };
        // Sign the token with a secret key and set expiry time
        const token = jwt.sign(tokenPayload, 'your-secret-key', { 
            expiresIn: '1h',
        });

        res.json({ token }); // Send token as json response
    } catch (error) {
        console.error(error); // Log error to console
        res.status(500).json({ error: 'Server error' }); // Send error response
    }

});

// Start the server and listen on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
