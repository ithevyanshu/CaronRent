import express from "express";
import cors from "cors";
import { authentication } from "./middleware/authentication";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", require("./routes/authRoutes"));
app.use("/car", authentication, require("./routes/carRoutes"));
app.use("/rental", authentication, require("./routes/rentalRoutes"));

app.listen(process.env.PORT);
