import express from "express"
import * as bookingController from "../controller/bookingController.js"

const bookingRoute = express.Router();

bookingRoute.get("/", bookingController.getAllBooking);
bookingRoute.post("/", bookingController.createBooking);
bookingRoute.put("/:BID", bookingController.updateBooking);
bookingRoute.delete("/:BID", bookingController.deleteBooking);

export default bookingRoute