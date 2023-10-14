import express from "express";
import { getFilteredRestaurant} from "../components/index.js";

const router = express.Router();

router.get("/filter",getFilteredRestaurant);



export default router;