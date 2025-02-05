import db from "../config/database.js"

export const getAllBooking = async () => {
    const [response] = await db.promise().query(
        `SELECT *
        FROM BOOKING`
    );
    console.log("model: ", response);
    return response;
}

export const createBooking = async (BID, BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BTIMEDISTANCE, BDETAILS, RID) => {
    await db.promise().query(
        `INSERT INTO booking (BID, BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BTIMEDISTANCE, BDETAILS, RID)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [BID, BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BTIMEDISTANCE, BDETAILS, RID]
    )
}

export const updateBooking = async (BTIMEIN, BTIMEOUT, BDETAILS, BID) => {
    const [response] = await db.promise().query(
        `UPDATE BOOKING
        SET BTIMEIN = ?, BTIMEOUT = ?, BDETAILS = ?
        WHERE BID = ?;` [BTIMEIN, BTIMEOUT, BDETAILS, BID]
    )
    return response;
}

export const deleteBooking = async (BID) => {
    await db.promise().query(
        `DELETE FROM BOOKING
        WHERE BID = ?;` [BID]
    )
}