const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  shipFrom: [{ type: String }],
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sale: {
    status: {
      type: Boolean,
      default: false,
    },
    percent: {
      type: Number,
      default: 0,
    },
  },
  length: [{ type: String }],
  hairColor: [{ type: String }],
  density: [{ type: String }],
  // ... more
  quantity: {
    total: { type: Number },
  },
  images:[
    {
      type:String,
      required:true
    }
  ]
});

module.exports = mongoose.model("Products", productSchema);
