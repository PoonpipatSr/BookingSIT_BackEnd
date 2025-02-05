import * as bookingModel from '../models/bookingModel.js'

export const getAllBooking = async (req, res) => {
    try {
        const booking = await bookingModel.getAllBooking();
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

export const createOwnedBooking = async (req, res) => {
    try {
        const newBooking = await bookingModel.createOwnedBooking(req.body);
        return res.status(201).json({
            success: true,
            data: newBooking,
            message: "Booking created successfully"
        });
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
};

export const updateOwnedBooking = async (req, res) => {
    try {
        const updatedBooking = await bookingModel.updateOwnedBooking(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            data: updatedBooking,
            message: "Booking updated successfully"
        });
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
};

export const deleteOwnedBooking = async (req, res) => {
    try {
        await bookingModel.deleteOwnedBooking(req.params.id);
        return res.status(200).json({
            success: true,
            data: null,
            message: "Booking deleted successfully"
        });
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        });
    }
};