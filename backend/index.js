import express from "express";
import cors from "cors";
import "dotenv/config.js";
import logger from "./utilities/logger.js";
import connectDatabase from "./config/database.js";
import deliveryRouter from "./routes/delivery.js";
import itemRoute from "./routes/item.route.js";
import paymentRoute from "./routes/payment.js";

const app = express();
const PORT = process.env.PORT || 8091;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.use("/delivery",deliveryRouter);

app.use("/item", itemRoute);

app.use("/payment", paymentRoute);

app.listen(PORT, () => {
    logger.info("Server has started and running on port " + PORT);
    connectDatabase();
})