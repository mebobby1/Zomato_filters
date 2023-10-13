import { app } from "./app.js";
import { ConnectDB } from "./data/database.js";

ConnectDB();

app.listen(5000,()=>{
    console.log("Server is Working")
})