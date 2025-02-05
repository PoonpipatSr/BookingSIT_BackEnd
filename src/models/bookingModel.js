import db from "../config/database.js"

export const getAllBooking = async () => {
    const [response] = await db.promise().query(
        `SELECT *
        FROM BOOKING`
    );
    console.log("model: ", response);
    return response;
}

export const createBooking = async (BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BDETAILS, RID) => {
    await db.promise().query(
        `INSERT INTO BOOKING (BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BDETAILS, RID)
        VALUES (?, ?, ?, ?, ?, ?, ?)`, [BFIRSTNAME, BLASTNAME, BROLE, BTIMEIN, BTIMEOUT, BDETAILS, RID]
    )
}

export const updateBooking = async (BTIMEIN, BTIMEOUT, BDETAILS, BID) => {
    const [response] = await db.promise().query(
        `UPDATE BOOKING
        SET BTIMEIN = ?, BTIMEOUT = ?, BDETAILS = ?
        WHERE BID = ?`, [BTIMEIN, BTIMEOUT, BDETAILS, BID]
    )
    return response;
}

export const deleteBooking = async (BID) => {
    await db.promise().query(
        `DELETE FROM BOOKING
        WHERE BID = ?`, [BID]
    )
}