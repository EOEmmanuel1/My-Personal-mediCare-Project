//models/Appointment.js:
const mongoose = require('mongoose');
const AppointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['booked', 'completed', 'canceled'], default: 'booked' },
});

const appointment= new mongoose.model("appointment", AppointmentSchema)
module.exports = appointment;
///hhhj