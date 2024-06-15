const Appointment = require('../models/appointment');
const Doctor = require('../models/Doctor');
const User = require('../models/user');

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).send({ error: 'Doctor not found' });
    }

    const appointment = new Appointment({
      user: req.user._id,
      doctor: doctorId,
      date,
      time,
      status: 'booked',
    });

    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const viewAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user._id }).populate('doctor');
    res.send(appointments);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateAppointment = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['date', 'time', 'status'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const appointment = await Appointment.findOne({ _id: req.params.id, user: req.user._id });

    if (!appointment) {
      return res.status(404).send();
    }

    updates.forEach((update) => (appointment[update] = req.body[update]));
    await appointment.save();
    res.send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!appointment) {
      return res.status(404).send();
    }

    res.send(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { bookAppointment, viewAppointments, updateAppointment, cancelAppointment };
