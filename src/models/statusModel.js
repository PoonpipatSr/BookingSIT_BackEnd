import db from "../config/database.js"

export const isAvailable = async (RID, BTIMEOUT, BTIMEIN) => {
    const [response] = await db.promise().query(
        `SELECT RID, BTIMEIN, BTIMEOUT
        FROM BOOKING
        WHERE RID = ?
        AND NOT (BTIMEOUT <= ? OR BTIMEIN >= ?);`, [RID, BTIMEIN, BTIMEOUT]
    )
    console.log(response);
    
    return response
}