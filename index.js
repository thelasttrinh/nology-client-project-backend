import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import { sequelize } from "./db/index.js";
import cors from "cors";

const app = express();

const port = 3070;

app.use(bodyParser.json());

app.use(cors());

sequelize
  .sync()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/products", router);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
