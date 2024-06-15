const express = require('express')
const  { registerDoctor, getDoctors }= require('../controllers/doctorController')

const router = express.Router()


router.post("/", getDoctors)

router.post("/add-doctor", registerDoctor)