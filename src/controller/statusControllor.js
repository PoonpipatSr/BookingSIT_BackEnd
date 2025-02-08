import * as statusModel from '../models/statusModel.js';
import { formatDateTime } from '../utils/timeFormat.js';

export const isAvailable = async (req, res) => {
    try {
        const { RID, BTIMEIN, BTIMEOUT } = req.body;
        
        if (!RID || !BTIMEIN || !BTIMEOUT) {
            return res.status(400).json({ error: "Missing required parameters" });
        }
        
        const response = await statusModel.isAvailable(RID, BTIMEOUT, BTIMEIN)
        const conflicts = response.flat();
        
        const formattedConflicts = conflicts.map(item => ({
            ...item,
            BTIMEIN: formatDateTime(item.BTIMEIN),
            BTIMEOUT: formatDateTime(item.BTIMEOUT)
        }));
        
        if (response.length > 0) {
            return res.status(200).json({ 
                success: true,
                available: false,
                conflicts: formattedConflicts
            });
        }
        return res.status(200).json({
            success: true,
            available: true,
            message: "Room is available"
        });
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error"
        })
    }
};
