const express = require('express');
const { appointments } = require('../data/store');

const router = express.Router();

// GET: Retrieve all appointments
router.get('/appointments', (req, res) => {
  res.status(200).json({ success: true, data: appointments });
});

// POST: Book a new appointment with double-booking prevention
router.post('/appointments', (req, res) => {
  try {
    const { clientName, clientEmail, service, date, timeSlot } = req.body;

    if (!clientName || !clientEmail || !service || !date || !timeSlot) {
      return res.status(400).json({ success: false, message: 'All booking fields are required.' });
    }

    // Check for conflicting slot on the same date (excluding cancelled bookings)
    const conflict = appointments.find(
      a => a.date === date && a.timeSlot === timeSlot && a.status !== 'Cancelled'
    );

    if (conflict) {
      return res.status(409).json({
        success: false,
        message: `Time slot ${timeSlot} on ${date} is already booked.`
      });
    }

    const newBooking = {
      id: Date.now(),
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      service: service.trim(),
      date,
      timeSlot,
      status: 'Pending'
    };

    appointments.unshift(newBooking);
    res.status(201).json({
      success: true,
      message: 'Appointment scheduled successfully!',
      data: newBooking
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: Update appointment status (Confirmed / Cancelled)
router.patch('/appointments/:id/status', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    const booking = appointments.find(a => a.id === id);

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Appointment not found.' });
    }

    if (!['Pending', 'Confirmed', 'Cancelled'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status value.' });
    }

    booking.status = status;
    res.status(200).json({ success: true, message: `Appointment marked as ${status}.`, data: booking });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove appointment record
router.delete('/appointments/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = appointments.findIndex(a => a.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Appointment not found.' });
    }

    appointments.splice(index, 1);
    res.status(200).json({ success: true, message: 'Appointment deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;