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

module.exports = {
    getAllUser,
    createNewUser
}