const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dbConnect = require("./config/db/dbConnect");
const cargoRoute = require("./route/cargoRoute");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

dbConnect();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/cargo", cargoRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
