const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    shortDes: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: String,
      trim: true,
      required: true,
    },
    discount: {
      type: Boolean,
      trim: true,
      required: true,
    },
    discountPrice: {
      type: String,
      trim: true,
      default: false,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    stock: {
      type: Boolean,
      trim: true,
      required: true,
      default: true,
    },
    star: {
      type: String,
      trim: true,
      required: true,
    },
    remark: {
      type: String,
      trim: true,
      required: true,
      enum: ["new", "trending", "top", "special", "regular"],
    },
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true },
    brandID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timeStamps: true, versionkey: false }
);

const ProductModel = mongoose.model("products", DataSchema);
module.exports = ProductModel;
