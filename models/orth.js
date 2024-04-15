const mongoose = require('mongoose');

const orthopedicSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Orthopedic' });
 
const Orthopedic = mongoose.model('Orthopedic', orthopedicSchema);

module.exports = Orthopedic;