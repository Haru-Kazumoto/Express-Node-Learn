import mysql from "mysql2";

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_express_db'
})

export default db.promise();