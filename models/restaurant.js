import mongoose from "mongoose";


const restaurantSchema = new mongoose.Schema({
    name: String,
  });
  
export const Restaurant = mongoose.model("Restaurant", restaurantSchema);