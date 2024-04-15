const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Login = require('./models/logi')
// const userSchema = require('./models/mongo');
const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/login", { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');

//     app.get('/logininfo',(req,res)=>{
//         User.find() // Retrieve all documents from the User collection
//             .then(users => res.json(users))
//             .catch(err => {
//                 console.error(err);
//                 res.status(500).json({ error: 'Internal Server Error' });
//             });
//     })

//     app.get('/', (req, res) => {
//                 res.send('Welcome to the Express.js API!');
//             });

//     app.post('/api/login', async (req, res) => {
//         const { username, password } = req.body;
            
//         const user = await User.findOne({ username, password });
            
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid username or password' });
//             }
            
//         res.json({ message: 'Login successful' });
//     });

//     app.listen(8080, () => {
//         console.log("Server is running on port 8080");
//     });
// });

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const Login = require('./models/logi');

// const app = express();
// app.use(express.json());
// app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/login", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');

    // Route to another component based on user input
    app.post('/api/login', async (req, res) => {
        const { username, password } = req.body;

        const user = await Login.findOne({ Username: username, Password: password });

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Assuming you have another component named "dashboard" to route to
        res.json({ message: 'Login successful', redirectTo: '/doctors' });
    });

    // Route to get login information
    app.get('/logininfo', (req, res) => {
        Login.find()
            .then(users => res.json(users))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

    app.get('/', (req, res) => {
        res.send('Welcome to the Express.js API!');
    });

    app.listen(8080, () => {
        console.log("Server is running on port 8080");
    });
});
