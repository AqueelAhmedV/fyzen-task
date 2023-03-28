const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: null,
  },
  endDate: {
    type: Date,
    default: null,
  },
  college: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('User', userSchema);