const mongoose = require('mongoose');

/**
 * Connect to MongoDB Database
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Modern mongoose options are defaults in Mongoose 6+
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host} (${conn.connection.name})`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
