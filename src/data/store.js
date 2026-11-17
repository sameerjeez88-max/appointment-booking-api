/**
 * @project Appointment & Booking Scheduling System REST API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const appointments = [
  {
    id: 1,
    clientName: 'Usman Tariq',
    clientEmail: 'usman@example.com',
    service: 'Full-Stack Architecture Consultation',
    date: '2026-11-20',
    timeSlot: '10:00 AM',
    status: 'Confirmed'
  },
  {
    id: 2,
    clientName: 'Ayesha Malik',
    clientEmail: 'ayesha@example.com',
    service: 'UI/UX Brand Audit',
    date: '2026-11-20',
    timeSlot: '02:00 PM',
    status: 'Pending'
  }
];

module.exports = { appointments };