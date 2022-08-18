const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true})
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

app.use(express.json());

app.use('/api/user',authRoute);

app.listen(3000,()=>{console.log('server is running in port 4000')});
