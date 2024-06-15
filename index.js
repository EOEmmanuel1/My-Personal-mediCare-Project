
const express = require('express');
const connectDB = require('./config/db');
const router = require('./route/appointment');
const appointmentRoutes = require('./route/appointment');
const userRoutes =require('./route/userRoutes');
//const getDoctors =require('./route/doctorRoutes');
const dotenv = require('dotenv');


dotenv.config();

const app = express();


const PORT = process.env.PORT || 8080;


app.listen( PORT, ()=>{
      console.log(`Server is running on ${PORT}`)
      connectDB()
  })

// // Connect to database


// Middleware
app.use(express.json());

// Routes
app.use("/api", router);
app.use("/api", appointmentRoutes);
//app.use("/api/doctor",getDoctors);
//app.use("/api/register",registerDoctor);

