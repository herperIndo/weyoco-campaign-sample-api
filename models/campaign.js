const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  additionalInfo: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Campaign', campaignSchema);
