// server.js - Entry point for YURA Reminder System
const express = require('express');
const path = require('path');
const reminderRoutes = require('./src/routes/reminderRoutes');
const scheduler = require('./src/services/scheduler');

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve static assets from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Reminder REST API routes
app.use('/api/reminders', reminderRoutes);

// Fallback for SPA routing to index.html if needed
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Central error handler
app.use((err, req, res, next) => {
  console.error('[Server Error]:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada internal server',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start scheduler (checks reminders every minute)
scheduler.start();

// Helper to start server with port fallback if in use
function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`===============================================`);
    console.log(`🚀 YURA Reminder System Server Running!`);
    console.log(`📍 Web Application: http://localhost:${port}`);
    console.log(`📡 API Reminders:    http://localhost:${port}/api/reminders`);
    console.log(`===============================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[Server] Port ${port} is in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('[Server] Fatal Error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
