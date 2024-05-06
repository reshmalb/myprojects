const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  basePrice:{
    type:Number,
    required:true,
  },
  role:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:false,
  },
  currentPrice:{
    type:Number,
    required:false
  },
  currentBidder:{
    type:String,
    required:false,
  },
  image:{
    type:String,
    requred:true,
  }

}, { timestamps: true });

module.exports = mongoose.model("Player", playerSchema);
