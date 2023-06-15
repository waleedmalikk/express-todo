require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
