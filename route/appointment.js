const express = require('express');
const { bookAppointment, viewAppointments, updateAppointment, cancelAppointment } = require('../controllers/appointment');
const auth = require('../middleware/auth');

//const appointment = require('../model/appointment');


const router = new express.Router();

//router.get('/', getDoctors);
//router.post('/Add-Doctore', registerDoctor)
router.post('/book', auth, bookAppointment);
router.get('/', auth, viewAppointments);
router.patch('/:id', auth, updateAppointment);
router.delete('/:id', auth, cancelAppointment);

//add

// router.post('/register', register);
// router.post('/login', login);





module.exports = router;


