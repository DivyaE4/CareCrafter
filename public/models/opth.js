const mongoose = require('mongoose');

const opthalmologistSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Opthalmologist' });
 
const Opthalmologist = mongoose.model('Opthalmologist', opthalmologistSchema);

module.exports = Opthalmologist;