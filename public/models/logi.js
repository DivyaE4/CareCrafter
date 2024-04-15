const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    // "Doctor Name":String,
    Username:String,
    Password:String,
},{ collection: 'User' });
 
const Login = mongoose.model('Login', loginSchema);

module.exports = Login;