const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration to allow requests from client
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// HTTP request logger in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Smart Expense Tracker API is running smoothly',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  });
});

// Mount Application Routes
app.use('/api/auth', authRoutes);
app.use('/api/expenses', expenseRoutes);

// Error Handling Middlewares
app.use(notFound);
app.use(errorHandler);

// Port Configuration
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`
  );
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`❌ Unhandled Rejection: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = app;
