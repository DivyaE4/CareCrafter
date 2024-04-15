const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // "Doctor Name":String,
    DoctorName:String,
    Specialization:String,
    Degree:String,
    url:String
});
 
const User = mongoose.model('users', userSchema);

module.exports = User;

// models/Cardiologist.js
// const mongoose = require('mongoose');

// const cardiologistSchema = new mongoose.Schema({
//     DoctorName:String,
//     Specialization:String,
//     Degree:String,
//     url:String
// });

// const Cardiologist = mongoose.model('Cardiologist', cardiologistSchema);

// //module.exports = Cardiologist;
// module.exports = { Cardiologist, User };


// const dermatologisttSchema = new mongoose.Schema({
//     DoctorName:String,
//     Specialization:String,
//     Degree:String,
//     url:String
// });

// const Dermatologist = mongoose.model('Dermatologist', dermatologisttSchema);

// module.exports = Dermatologist;


// const neurologistSchema = new mongoose.Schema({
//     DoctorName:String,
//     Specialization:String,
//     Degree:String,
//     url:String
// });

// const Neurologist = mongoose.model('Neurologist', neurologistSchema);

// module.exports = Neurologist;
// const cardiologistSchema = new mongoose.Schema({
//     DoctorName:String,
//     Specialization:String,
//     Degree:String,
//     url:String
// });

// const Cardiologist = mongoose.model('Cardiologist', cardiologistSchema);

// module.exports = Cardiologist;
// const cardiologistSchema = new mongoose.Schema({
//     DoctorName:String,
//     Specialization:String,
//     Degree:String,
//     url:String
// });

// const Cardiologist = mongoose.model('Cardiologist', cardiologistSchema);

// module.exports = Cardiologist;
// const cardiologistSchema = new mongoose.Schema({
//     DoctorName:String,
//     Specialization:String,
//     Degree:String,
//     url:String
// });

// const Cardiologist = mongoose.model('Cardiologist', cardiologistSchema);

// module.exports = Cardiologist;