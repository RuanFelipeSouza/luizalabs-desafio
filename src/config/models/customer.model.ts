import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  productList: [
    {
      price: String,
      image: String,
      brand: String,
      id: { type: String, index: { unique: true } },
      title: String,
      reviewScore: String,
    },
  ],
});
