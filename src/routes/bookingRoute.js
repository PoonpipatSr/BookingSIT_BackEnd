import express from "express"
import * as bookingController from "../controller/bookingController.js"

const bookingRoute = express.Router();

bookingRoute.get("/booking/get", bookingController.getAllBooking);
bookingRoute.post("/booking/create", bookingController.createBooking);
bookingRoute.put("/booking/update", bookingController.updateBooking);
bookingRoute.delete("booking/delete", bookingController.deleteBooking);

export default bookingRoute