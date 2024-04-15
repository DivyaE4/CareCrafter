const mongoose = require('mongoose');

const oncologistSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Oncologist' });
 
const Oncologist = mongoose.model('Oncologist', oncologistSchema);

module.exports = Oncologist;