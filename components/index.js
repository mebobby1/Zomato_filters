import { Restaurant } from "../models/restaurant.js";


export const getFilteredRestaurant = async (req, res) => {
    try {
      const { location, lcost, hcost, cuisine, mealtype, sort, page } = req.query;
  
    const filterObj = {};
  
    if (location) {
      filterObj.city_name = location;
    }
  
    if (lcost && hcost) {
      filterObj.cost = { $gte: lcost, $lte: hcost };
    } else if (lcost) {
      filterObj.cost = { $gte: lcost };
    } else {
      filterObj.cost = { $lte: hcost };
    }
  
    if (cuisine) {
      filterObj[`Cuisine.name`] = cuisine;
    }
  
    if (mealtype) {
      filterObj[`type.name`] = mealtype;
    }
  
    const sortOptions = {};
  
    if (sort) {
      if (sort === "asc") {
        sortOptions.cost = 1;
      } else if (sort === "desc") {
        sortOptions.cost = -1;
      }
    }
  
    const itemsPerPage = 2;
    const pageNumber = page || 1;
  
  const restaurantData = await Restaurant.find(filterObj)
      .sort(sortOptions)
      .skip((pageNumber - 1) * itemsPerPage)
      .limit(itemsPerPage);

      res.json(restaurantData);


    } catch (error) {
      res.json({
        success: false,
        message: "Use Filters Options",
      })
    }
  }

