import * as bookingModel from '../models/bookingModel.js'

const userId = 1

export const getOwnedBooking = async (req, res) => {
    try {
        const booking = await bookingModel.getOwnedBooking(userId);
        return res.status(200).json({
            success: true,
            data: booking,
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
}