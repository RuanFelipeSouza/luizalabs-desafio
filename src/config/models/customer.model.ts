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
    sparse: true,
  },
  password: {
    type: String,
    trim: true,
  },
  productList: [
    {
      price: String,
      image: String,
      brand: String,
      id: String,
      title: String,
      reviewScore: String,
    },
  ],
});
