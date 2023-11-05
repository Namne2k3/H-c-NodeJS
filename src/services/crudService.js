const connection = require("../config/database")

const getAllUser = async () => {
    const [results, fields] = await connection.query('SELECT * FROM Users');
    return results;
}

const createNewUser = async ({ email, myname, city }) => {
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, myname, city]
    );
    return results;
}

const updateUser = async ({ userId, email, myname, city }) => {
    const [result, fields] = await connection.query(
        `UPDATE Users SET email = ? , name = ? , city = ? WHERE id = ?`, [email, myname, city, userId]
    );
    return result;
}

const getUser = async (userId) => {
    const [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`, [userId]
    );

    console.log("Check User >>> ", results[0]);
    return results[0];
}

module.exports = {
    getAllUser,
    createNewUser,
    getUser,
    updateUser
}