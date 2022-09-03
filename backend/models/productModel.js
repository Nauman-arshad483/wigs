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
  images: [
    {
      type: String,
      required: true,
    },
  ],
  variants: [
    {
      shipFrom: { type: String, required: true },
      price: {
        type: Number,
        required: true,
      },
      length: { type: String },
      hairColor: { type: String },
      density: { type: String },
      quantity: {
        total: { type: Number },
      },
    },
  ],
});

module.exports = mongoose.model("Products", productSchema);
