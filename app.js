require('dotenv').config();

const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

// Parse incoming JSON data
app.use(express.json());

// // const db = require('./models/index');
// // const { User } = db;

// // User.findAll()
// //   .then(users => {
// //     console.log(users);
// //   })
// //   .catch(error => {
// //     console.error('Error retrieving users:', error);
// //   });

// app.get("/",(req,res)=>{
//     res.send("Hello!");
// })


// Mount user routes
app.use('/api/user', userRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 000');
});
