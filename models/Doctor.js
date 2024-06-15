//models/Doctor.js:

const express = require('express')
const mongoose = require('mongoose');
const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  availability: [{ date: String, time: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});
module.exports = mongoose.model('Doctor', DoctorSchema);
//kkk