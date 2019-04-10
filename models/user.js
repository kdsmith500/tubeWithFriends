const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: String,
  avatar: {
      type: String,
      default: ''
  },
  bio: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);