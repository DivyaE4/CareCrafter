// import { useEffect, useState } from 'react';
import './Login.css';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css'
// const Login = () => {
  
//     return (
    
//       <div className="login-container">
//         <h1>Login Page</h1>
        
//       </div>
    
//     );
//   };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegister = async () => {
//         try {
//             await axios.post('/api/register', { username, password });
//             console.log('User registered successfully');
//         } catch (error) {
//             console.error('Error registering user:', error.response.data.message);
//         }
//     };

//     const handleLogin = async () => {
//         try {
//             await axios.post('/api/login', { username, password });
//             console.log('Login successful');
//         } catch (error) {
//             console.error('Error logging in:', error.response.data.message);
//         }
//     };

//     return (
//         <div>
//           <center>
//             <h1>MERN Login</h1>
//             <div>
//                 <label>Username: </label>
//                 <input type="text" onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input type="password" onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <div>
//                 <button onClick={handleRegister}>Register</button>
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//             </center>
//         </div>
//     );
// }

// export default Login;


// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5000/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();
//     console.log(data);
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegister = async () => {
//         try {
//             await axios.post('http://localhost:5000/api/register', { username, password });
//             console.log('User registered successfully');
//         } catch (error) {
//             console.error('Error registering user:', error.response.data.message);
//         }
//     };

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('http://localhost:5000/api/login', { username, password });
//             const token = response.data.token;
//             console.log('Login successful. Token:', token);
//             // Save the token in local storage or state for future use
//         } catch (error) {
//             console.error('Error logging in:', error.response.data.message);
//         }
//     };

//     return (
//         <div className='app-container'>
//             <h1>MERN Login</h1>
//             <div>
//                 <label>Username: </label>
//                 <input type="text" onChange={(e) => setUsername(e.target.value)} />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input type="password" onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <div>
//                 <button onClick={handleRegister}>Register</button>
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         </div>
//     );
// }

// export default App;


// src/components/Login.js

// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ history }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/login', {
//         username,
//         password,
//       });

//       if (response && response.data) {
//         console.log('Login successful');
//         // Assuming the server provides a redirectTo field
//         const redirectTo = response.data.redirectTo;

//         // Redirect to another component (e.g., Dashboard) using window.location
//         window.location.href = redirectTo;
//       } else {
//         alert('Invalid response format');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error.response?.data.message || error.message);
//     }
//   };
  

//   return (
//     <div>
//       <center>
//       <h1>Login</h1>
//       <div>
//         <label>Username: </label>
//         <input type="text" onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         <label>Password: </label>
//         <input type="password" onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <div>
//         <button onClick={handleLogin}>Login</button>
//       </div>
//       </center>
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import your CSS file

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });

      if (response && response.data) {
        console.log('Login successful');
        // Assuming the server provides a redirectTo field
        const redirectTo = response.data.redirectTo;

        // Redirect to another component (e.g., Dashboard) using window.location
        window.location.href = redirectTo;
      } else {
        alert('Invalid response format');
      }
    } catch (error) {
      console.error('Error logging in:', error.response?.data.message || error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <div>
          <label>Username: </label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
