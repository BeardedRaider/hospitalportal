const mongoose = require('mongoose');/* Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. */

const userSchema = new mongoose.Schema({
    firstname: String,
    surname: String,
    email: String,
    password: String,
    guardian: String,
    guardian_name: String,
    dob: Date,
    department: String,
    notes: String,
    patient_number: Number,
});/* mongoose.Schema() is used to define the structure of the document. */

const User = mongoose.model('User', userSchema);/* mongoose.model() is used to create a model. */

module.exports = User;/* module.exports is used to export the model. */

