import mongoose from "mongoose";


const restaurantSchema = new mongoose.Schema({
  name: String,
  locality: String,
  city_name: String,
  address: String,
  thumb: String,
  cost: Number,
  contact_number: String,
  type: [
      {
          mealtype: Number,
          name: String,
      }
  ],
  cuisine: [
      {
          cuisine: Number,
          name: String,
      }
  ]
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);