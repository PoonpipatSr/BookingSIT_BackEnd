import db from "../config/database.js"

export const getAllBooking = async () => {
    const [response] = await db.promise().query(
        `SELECT *
        FROM BOOKING`
    );
    console.log("model: ", response);
    return response;
}