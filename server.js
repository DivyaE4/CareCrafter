// const express = require('express');
// const MongoClient = require('mongodb').MongoClient;

// const app = express();

// // Connect to the MongoDB database
// const client = new MongoClient('mongodb://localhost:27017/bookappointment');
// client.connect((err, db) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     process.exit(1);
//   }

//   // Create a collection to store the appointment data
//   const appointmentCollection = db.collection('appointments');

//   // Define a POST endpoint to submit an appointment
//   app.post('/submit-appointment', async (req, res) => {
//     const { name, date, time, reason } = req.body;

//     // Create a new appointment document
//     const appointment = {
//       name,
//       date,
//       time,
//       reason,
//     };

//     // Insert the appointment document into the database
//     await appointmentCollection.insertOne(appointment);

//     // Send a success response to the client
//     res.status(200).send({ message: 'Appointment saved successfully' });
//   });
// });

// // Start the Express server
// app.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });


// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');
// const app = express();

// app.use(express.json());
// app.use(cors());

// const url = 'mongodb://localhost:27017';
// //const url = 'mongodb://127.0.0.1:27017'; // Use the correct MongoDB connection URL
// const dbName = 'bookappointment';

// MongoClient.connect(url, (err, client) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     process.exit(1);
//   }

//   const db = client.db(dbName);
//   const appointmentCollection = db.collection('appointments');

//   app.post('/submit-appointment', async (req, res) => {
//     const { name, date, time, reason } = req.body;

//     // Create a new appointment document
//     const appointment = {
//       name,
//       date,
//       time,
//       reason,
//     };

//     // Insert the appointment document into the database
//     try {
//       const result = await appointmentCollection.insertOne(appointment);
//       res.status(200).json({ message: 'Appointment saved successfully', insertedId: result.insertedId });
//     } catch (error) {
//       console.error('Error while saving appointment:', error);
//       res.status(500).json({ message: 'An error occurred while saving the appointment' });
//     }
//   });

//   app.listen(5000, () => {
//     console.log('Server listening on port 5000');
//   });
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const mongoURI = 'mongodb://localhost:27017/bookappointment'; // Use the correct MongoDB connection URL

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Failed to connect to MongoDB:', error);
//     process.exit(1);
//   });

// const appointmentSchema = new mongoose.Schema({
//   name: String,
//   date: String,
//   time: String,
//   reason: String,
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// app.post('/submit-appointment', async (req, res) => {
//   const { name, date, time, reason } = req.body;

//   // Create a new appointment document
//   const appointment = new Appointment({
//     name,
//     date,
//     time,
//     reason,
//   });

//   // Save the appointment to the database
//   try {
//     const savedAppointment = await appointment.save();
//     res.status(200).json({ message: 'Appointment saved successfully', insertedId: savedAppointment._id });
//   } catch (error) {
//     console.error('Error while saving appointment:', error);
//     res.status(500).json({ message: 'An error occurred while saving the appointment' });
//   }
// });

// app.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// // MongoDB connection URL
// //const mongoURL = 'mongodb://localhost:27017/bookappointment';
// const mongoURL = 'mongodb://127.0.0.1:27017/bookappointment'; 

// // Connect to MongoDB using Mongoose
// mongoose.connect(mongoURL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   });
  
  

// // Get the default connection
// const db = mongoose.connection;

// // Check if the connection is successful
// db.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// // Check for connection errors
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Rest of your code...

// // Define a POST endpoint to submit an appointment
// app.post('/submit-appointment', async (req, res) => {
//   // Rest of your endpoint code...
// });

// // Define a GET endpoint for the same URL
// app.get('/submit-appointment', (req, res) => {
//     // Handle GET request (if needed)
//     res.send('This is a GET request for /submit-appointment');
//   });
  

// // Start the Express server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log('Server listening on port ${PORT}');
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// const mongoURL = 'mongodb://127.0.0.1:27017/bookappointment';

// mongoose.connect(mongoURL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// const db = mongoose.connection;

// db.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.post('/submit-appointment', async (req, res) => {
//     try {
//         const { name, date, time, reason } = req.body;

//         const Appointment = mongoose.model('Appointment', {
//             name: String,
//             date: Date,
//             time: String,
//             reason: String,
//         });

//         const newAppointment = new Appointment({
//             name,
//             date: new Date(date),
//             time,
//             reason,
//         });

//         await newAppointment.save();

//         res.status(201).json({ message: 'Appointment submitted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

// const appointments= require('./models/appo');
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// app.use(express.json());
// app.use(cors());

// const mongoURL = 'mongodb://127.0.0.1:27017/bookappointment';

// mongoose.connect(mongoURL, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// const db = mongoose.connection;

// db.on('connected', () => {
//   console.log('Connected to MongoDB');
// });

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // Define the Appointment model outside of the endpoint handler
// const Appointment = mongoose.model('Appointment', {
//   name: String,
//   date: Date,
//   time: String,
//   reason: String,
// });

// // Define the endpoint handler after defining the model
// app.post('/submit-appointment', async (req, res) => {
//   try {
//     const { name, date, time, reason } = req.body;

//     // Create a new appointment instance with the extracted data
//     const newAppointment = new Appointment({
//       name,
//       date: new Date(date),
//       time,
//       reason,
//     });

//     // Save the appointment to the database
//     await newAppointment.save();

//     // Respond with a success message
//     res.status(201).json({ message: 'Appointment submitted successfully' });
//   } catch (error) {
//     // Handle any errors and respond with an error message
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// app.get('/getappointmentinfo', (req, res) => {
//   appointments.find() // Retrieve all documents from the appointments collection
//       .then(appointments => res.json(appointments))
//       .catch(err => {
//           console.error(err);
//           res.status(500).json({ error: 'Internal Server Error' });
//       });
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const mongoURL = 'mongodb://127.0.0.1:27017/bookappointment';

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the Appointment model outside of the endpoint handler
const Appointment = mongoose.model('Appointment', {
  name: String,
  date: Date,
  time: String,
  reason: String,
  doctor: String, // Added field for the doctor's name
});

// Define the endpoint handler after defining the model
app.post('/submit-appointment', async (req, res) => {
  try {
    const { name, date, time, reason, doctor } = req.body;

    // Check if the selected slot is already booked
    const isSlotBooked = await Appointment.exists({ date, time, doctor });

    if (isSlotBooked) {
      return res.status(400).json({ error: 'This slot is already booked. Please choose a different time.' });
    }

    // Create a new appointment instance with the extracted data
    const newAppointment = new Appointment({
      name,
      date: new Date(date),
      time,
      reason,
      doctor,
    });

    // Save the appointment to the database
    await newAppointment.save();

    // Respond with a success message
    res.status(201).json({ message: 'Appointment submitted successfully' });
  } catch (error) {
    // Handle any errors and respond with an error message
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/getappointmentinfo', (req, res) => {
  Appointment.find() // Retrieve all documents from the Appointment collection
    .then(appointments => res.json(appointments))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


