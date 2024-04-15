// const express=require('express')
// const mongoose=require('mongoose')
// const cors=require('cors')
// const userSchema=require('./models/mongo')
// const app=express()
// app.use(cors())
// app.use(express.json())

// // mongoose.connect("mongodb://localhost:27017/doctordetails")
// mongoose.connect("mongodb://127.0.0.1:27017/doctordetails");


// app.get('/getNames',(req,res)=>{
//     userSchema.find()
//     .then(users=>res.json(users))
//     .catch(err=>res.json(err))
// })

// app.listen(3001,()=>{
//     console.log("server is running")
// })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const userSchema = require('./models/mongo');
// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/doctordetails");
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
    
//     // Define your route after establishing the database connection
//     app.get('/getNames', (req, res) => {
//         userSchema.find()
//             .then(users => res.json(users))
//             .catch(err => res.json(err));
//     });

//     // Start the server after defining the route
//     app.listen(3001, () => {
//         console.log("Server is running on port 3001");
//     });
// });















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// //const { Cardiologist } = require('./models/mongo');
// const userSchema = require('./models/mongo');
// // const cardiologistSchema=require('./models/mongo')

// // const { Cardiologist } = require('./models/mongo');
// const cardiologistSchema=require('./models/card');
// const app = express();
// app.use(cors());
// app.use(express.json());

// //mongoose.connect("mongodb://127.0.0.1:27017/doctordetails");
// mongoose.connect("mongodb://127.0.0.1:27017/finalinfodoctor");
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
    
//     // Define your route after establishing the database connection
//     app.get('/getCard', (req, res) => {
//         cardiologistSchema.find()
//             .then(Cardiologist => res.json(Cardiologist))
//             .catch(err => res.json(err));
//     });

    

//     // app.get('/getCardiologists', (req, res) => {
        
//     //     Cardiologist.find()
//     //         .then(cardiologists => res.json(cardiologists))
//     //         .catch(err => res.json(err));
//     // });

    

//     // Define a route for the root URL
//     app.get('/', (req, res) => {
//         res.send('Welcome to the Express.js API!');
//     });

//     // Start the server after defining the routes
//     app.listen(3001, () => {
//         console.log("Server is running on port 3001");
//     });
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/mongo');
const Cardiologist = require('./models/card'); // Import the Cardiologist model
const Dermatologist = require('./models/derm');
const Neurologist = require('./models/neuro');
const Oncologist = require('./models/onco');
const Opthalmologist = require('./models/opth');
const Orthopedic = require('./models/orth');
const Pediatrician = require('./models/pedi');
// const userSchema = require('./models/mongo');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/finalinfodoctor", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');

    app.get('/getCardiologists', (req, res) => {
        Cardiologist.find() // Retrieve all documents from the Cardiologist collection
            .then(cardiologists => res.json(cardiologists))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getDermatologists', (req, res) => {
        Dermatologist.find() 
            .then(dermatologists => res.json(dermatologists))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getNeurologists', (req, res) => {
        Neurologist.find() 
            .then(neurologists => res.json(neurologists))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getOncologists', (req, res) => {
        Oncologist.find() 
            .then(oncologists => res.json(oncologists))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getOpthalmologist', (req, res) => {
        Opthalmologist.find() 
            .then(opthalmologists => res.json(opthalmologists))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getOrthopedic', (req, res) => {
        Orthopedic.find() 
            .then(orthopedics => res.json(orthopedics))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getPediatricians', (req, res) => {
        Pediatrician.find() 
            .then(pediatricians => res.json(pediatricians))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/getNames', (req, res) => {
                User.find()
                    .then(users => res.json(users))
                    .catch(err => res.json(err));
            });
    

    app.get('/', (req, res) => {
                res.send('Welcome to the Express.js API!');
            });

    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});
