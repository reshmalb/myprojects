const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email:String,
  contactNumber:Number,
  status:Boolean

});

const User = mongoose.model('User', userSchema);

module.exports = User;
