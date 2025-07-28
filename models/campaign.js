// models/campaign.js
const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  startDate: Date,
  endDate: Date,
  budget: Number
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
