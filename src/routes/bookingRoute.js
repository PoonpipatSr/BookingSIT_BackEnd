import express from "express"
import * as bookingController from "../controller/bookingController.js"

const bookingRoute = express.Router();

bookingRoute.get("/owned", bookingController.getOwnedBooking);

export default bookingRoute