import * as statusModel from '../models/statusModel.js';

export const isAvailable = async (req, res) => {
    try {
        const { RID, BTIMEIN, BTIMEOUT } = req.body;
        const status = await statusModel.isAvailable(RID, BTIMEOUT, BTIMEIN);

        const roomStatus = status[0]?.roomStatus;

        if (roomStatus === 'NotAvailable') {
            return res.status(200).json({
                success: false,
                data: null,
                message: `The room is in use`
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
