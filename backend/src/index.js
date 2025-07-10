import dotenv from "dotenv";
dotenv.config();
import connect_DB from "./DB/index.js";
const PORT = process.env.PORT || 8000;

//routes
import { app } from "./app.js";

connect_DB().then(() => {
    app.listen(PORT, () => console.log(`Active connection at Port: ${PORT}`) );
}).catch((err) => console.log("mongoDB Connection failed ", err));