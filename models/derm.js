const mongoose = require('mongoose');

const dermatologisttSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Dermatologist' });
 
const Dermatologist = mongoose.model('Dermatologist', dermatologisttSchema);

module.exports = Dermatologist;