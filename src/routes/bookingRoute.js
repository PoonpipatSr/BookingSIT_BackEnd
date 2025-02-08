import express from "express"
import * as bookingController from "../controller/bookingController.js"
import * as statusController from "../controller/statusControllor.js"

const bookingRoute = express.Router();

bookingRoute.get("/all", bookingController.getAllBooking);
bookingRoute.get("/get/:BID", bookingController.getBooking);
bookingRoute.post("/", bookingController.createBooking);
bookingRoute.put("/:BID", bookingController.updateBooking);
bookingRoute.delete("/:BID", bookingController.deleteBooking);
bookingRoute.get("/status", statusController.isAvailable)

export default bookingRoute