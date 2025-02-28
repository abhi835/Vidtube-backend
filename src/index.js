import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
// import { error } from "winston";

dotenv.config({
  path: "src/.env", //   ./.env
});
// console.log("Environment Variablessss:", process.env);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
