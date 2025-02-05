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

export const createBooking = async (req, res) => {
    try {
        const getValue = req.body
        const newBooking = await bookingModel.createBooking(getValue);
        return res.status(200).json({
            success: true,
            data: newBooking,
            message: "Booking created successfully"
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

export const updateBooking = async (req, res) => {
    try {
        const updateValue = req.params.BID
        const getValue = req.body
        const updateBooking = await bookingModel.updateBooking(getValue, updateValue)
        return res.status(200).json({
            success: true,
            data: updateBooking,
            message: "Booking updated successfully"
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

export const deleteBooking = async (req, res) => {
    try {
        const getId = req.body.BID
        const deleteBooking = await bookingModel.deleteBooking(getId)
        return res.status(200).json({
            success: true,
            data: deleteBooking,
            message: "Booking deleted successfully"
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