const express = require('express')
const router = express.Router()
const {getAllBookings, getBookingById, createBooking} = require('../controllers/bookingController')

router.route('/')
    .get(getAllBookings)
    .post(createBooking)

router.route('/:id')
    .get(getBookingById)
module.exports = router