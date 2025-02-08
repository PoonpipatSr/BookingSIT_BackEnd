import db from "../config/database.js"
import { formatDateTime } from "../utils/timeFormat.js";

export const getAllBooking = async () => {
    const [response] = await db.promise().query(
        `SELECT *
        FROM BOOKING`
    );
    const formattedBooking = response.map(item => ({
        ...item,
        BTIMEIN: formatDateTime(item.BTIMEIN),
        BTIMEOUT: formatDateTime(item.BTIMEOUT)
    }));
    
    console.log("model: ", formattedBooking);
    return formattedBooking;
}

export const getBooking = async (BID) => {
    const [response] = await db.promise().query(
        `SELECT *
        FROM BOOKING
        WHERE BID = ?`, [BID]
    );
    const formattedBooking = response.map(item => ({
        ...item,
        BTIMEIN: formatDateTime(item.BTIMEIN),
        BTIMEOUT: formatDateTime(item.BTIMEOUT)
    }));
    
    console.log("model: ", formattedBooking);
    return formattedBooking;
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
    const formattedBooking = response.map(item => ({
        ...item,
        BTIMEIN: formatDateTime(item.BTIMEIN),
        BTIMEOUT: formatDateTime(item.BTIMEOUT)
    }));
    
    console.log("model: ", formattedBooking);
    return formattedBooking;
}

export const deleteBooking = async (BID) => {
    const [response] = await db.promise().query(
        `DELETE FROM BOOKING
        WHERE BID = ?`, [BID]
    )
    return response
}