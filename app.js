require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bookingRoute = require('./routes/bookingRoute')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Booking API with Sequelize is running! 🚀');
});
app.use('/api/bookings', bookingRoute);


app.listen(port, () => {
    console.log(`Server running di http://localhost:${port}`)
})