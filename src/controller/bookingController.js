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
        const {BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BDETAILS, RID} = req.body

        if (!BFIRSTNAME || !BLASTNAME || !BROLE || !BTIMEIN || !BTIMEOUT || !RID) {
            return res.status(400).json({
                success: false,
                data: null,
                message: "Firstname Lastname Role TimeIn TimeOut and RoomID must require"
            })
        }
        const newBooking = await bookingModel.createBooking(BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BDETAILS, RID);
        return res.status(201).json({
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
        const {BTIMEIN, BTIMEOUT, BDETAILS} = req.body
        if (!BTIMEIN || !BTIMEOUT){
            return res.status(400).json({
                success: false,
                data: null,
                message: "TimeIn and TimeOut must require"
            })
        }
        const updateBooking = await bookingModel.updateBooking(BTIMEIN, BTIMEOUT, BDETAILS, updateValue)
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
        const getId = req.params.BID
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

export const isAvailable = async (req, res) => {
    try {
        const { BTIMEIN, BTIMEOUT } = req.body;
        const status = await bookingModel.isAvailable(BTIMEIN, BTIMEOUT);

        const roomStatus = status[0]?.RoomStatus;
        
        if (roomStatus === 'Not Available') {
            return res.status(200).json({
                success: false,
                data: null,
                message: `The room is in use during ${status[0]?.NextAvailableFrom} ถึง ${status[0]?.NextAvailableUntil}`
            });
        }
        return res.status(200).json({
            success: true,
            data: true,
            message: "Room is available"
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
