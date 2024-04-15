const mongoose = require('mongoose');

const cardiologistSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Cardiologist' });
 
const Cardiologist = mongoose.model('Cardiologist', cardiologistSchema);

module.exports = Cardiologist;