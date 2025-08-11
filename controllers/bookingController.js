const {Booking} = require('../models')

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll()
        res.status(200).json({
            message: 'Berhasil mendapatkan data booking',
            data: bookings
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.getBookingById = async (req, res) => {
    try {
        const bookingId = req.params.id
        if(!bookingId) return res.status(404).json({message: 'Booking tidak ditemukan!'})

        const booking = await Booking.findByPk(bookingId)
    
        res.status(200).json({
        message: 'Data booking ditemukan!',
        data: booking
    })
    } catch (error) {
        res.status(500).json({message: error.message})
    }   
}

exports.createBooking = async (req, res) => {
    try {
        const {customerName, bookingDate} = req.body

        if (!customerName || !bookingDate) return res.status(400).json({message: 'Nama customer dan tanggal booking diperlukan!'})
        
        const newBooking = await Booking.create({
            customerName,
            bookingDate,
            status: 'confirmed'
        })

        res.status(201).json({
            message: 'Booking created successfully!',
            data: newBooking
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}