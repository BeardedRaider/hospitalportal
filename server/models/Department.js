const mongoose = require('mongoose');/* Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. */

const departmentSchema = new mongoose.Schema({
    name: String,
    details: String,
    consultant: String,
    nurse: String,
    consultant_img: String,
    nurse_img: String,
    img_one: String,
    img_two: String,
    img_three: String,
    map: String,
});/* mongoose.Schema() is used to define the structure of the document. */

const Department = mongoose.model('Department', departmentSchema);/* mongoose.model() is used to create a model. */

module.exports = Department;/* module.exports is used to export the model. */