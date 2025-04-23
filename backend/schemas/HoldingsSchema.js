const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg:{
    type:Number,
  },
  price: Number,
  net: String,
  day:{
    type: String,
    default:"+0.5%"
  }
});

module.exports = { HoldingsSchema };