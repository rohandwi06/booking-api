'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Bookings', [
      {
        id: 1, // Kita set ID manual agar sesuai dengan data lama
        customerName: 'Sopo Jarwo',
        bookingDate: new Date('2025-12-20T10:00:00.000Z'),
        status: 'confirmed',
        createdAt: new Date(), // Wajib diisi
        updatedAt: new Date()  // Wajib diisi
      },
      {
        id: 2,
        customerName: 'Adit',
        bookingDate: new Date('2025-12-22T14:30:00.000Z'),
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Bookings', null, {});
  }
};
