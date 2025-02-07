import express from "express"
import connection from "./config/database.js";
import bookingRoute from "./routes/bookingRoute.js";
import { logger } from "./middlewares/logger.js";

const app = express();
const port = 3000;

app.use(logger)
app.use(express.json());

app.use("/api/booking", bookingRoute) // ตั้ง path เอง

connection.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Database is connected");
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})