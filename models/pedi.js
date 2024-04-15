const mongoose = require('mongoose');

const pediatricianSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Pediatrician' });
 
const Pediatrician = mongoose.model('Pediatrician', pediatricianSchema);

module.exports = Pediatrician;

