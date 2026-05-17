require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ ADD IT RIGHT HERE ↓↓↓

// 1. Import the routes
const productRoutes = require('./routes/products');

// 2. Use the routes
app.use('/api/products', productRoutes);

// ✅ DO NOT PUT ANYTHING BELOW THIS EXCEPT LISTEN

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});