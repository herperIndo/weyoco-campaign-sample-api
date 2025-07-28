const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const campaignRoutes = require('./routes/campaigns');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // for JSON body parsing
app.use('/api/campaigns', campaignRoutes); // Mount route correctly

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
