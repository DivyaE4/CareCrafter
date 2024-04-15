const mongoose = require('mongoose');

const appointmentsSchema = new mongoose.Schema({
    // "Doctor Name":String,
    name: String,
    date: Date,
    time: String,
    reason: String,
},{ collection: 'appointments' });
 
const appointments = mongoose.model('appointments', appointmentsSchema);

module.exports = appointments;