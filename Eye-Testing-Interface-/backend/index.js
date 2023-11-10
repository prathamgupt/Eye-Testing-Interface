const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
var cors = require('cors');
const testresRoute = require("./route/testres");
const userRoute = require("./route/user");
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));
app.use("/testres", testresRoute);
app.use("/users", userRoute);
const PORT = process.env.PORT||8800;
app.listen(8800, () => {
  console.log("Running!");
});
