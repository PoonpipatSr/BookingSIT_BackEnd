import db from "../config/database.js"

export const getOwnedBooking = async (userId) => {
    const [response] = await db.promise().query(
        `SELECT ...
        FROM ...
        WHERE ...`, [userId]
    );
    console.log("model: ", response);
    return response;
}