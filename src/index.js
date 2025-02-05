import express from "express"
import connection from "./config/database";
import bookingRoute from "./routes/bookingRoute";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/booking", bookingRoute) // ตั้ง path เอง

import db from "./config/database.js";
const userId = 1;
app.get("/api/users", async (req, res) => {
    try {
        const [response] = await db.promise().query(
            `SELECT ...
            FROM ...
            WHERE ...`,
            [userId]
        );
        return res.status(200).json({
            success: true,
            data: response,
            message: "Booking retrieved successfully"
        })
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        })
    }
})

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