const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(cors({
  origin: 'http://127.0.0.1:3000',  // your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // if you want to allow cookies/auth headers
}));
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const vendorRoutes = require('./Routes/vendorRoutes');
const customerRoutes = require('./Routes/customerRoutes');


// Mount routes BEFORE starting server
app.use('/api/customers', customerRoutes);
app.use('/api/vendor', vendorRoutes);


// MongoDB Connection + Start Server
const startServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:yourpassword@wedwisecluster.okderux.mongodb.net/?retryWrites=true&w=majority&appName=WedWiseCluster');
    console.log('MongoDB connected');

    app.listen(5000, () => {
      console.log('Server running on http://localhost:5000');
    });
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
};

startServer();
app.get('/test', (req, res) => {
  res.send('Main test working');
});

