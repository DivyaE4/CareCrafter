const mongoose = require('mongoose');

const neurologistSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
},{ collection: 'Neurologist' });
 
const Neurologist = mongoose.model('Neurologist', neurologistSchema);

module.exports = Neurologist;