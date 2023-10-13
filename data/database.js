import mongoose from "mongoose";


export const ConnectDB = ()=>{
    mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "Zomato",
  })
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((e) => console.log(e));
}