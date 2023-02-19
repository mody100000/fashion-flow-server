const mongoose = require('mongoose')

// TODO: create reviews model
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: [
      {
        src: { type: String, required: true },
        color: { type: String, required: false },
        description: { type: String, required: false },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("stock can't be less than 0")
        }
      },
    },
    sizes: [
      {
        label: {
          type: String,
          required: true,
          enum: ['xs' ,'sm', 'md', 'lg', 'xl', 'xxl', '3xl', '4xl' ,'5xl', "extra large"],
        },
      },
    ],
    description : {
        type : String,
        required : false
    },
    discount : {
        type : Number,
        required : false,
        validate(value) {
            if (value< 0 || value > 100) {
              throw new Error("disscount can't be less than 0 or greater than 100")
            }
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
