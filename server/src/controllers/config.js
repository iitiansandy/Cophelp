const dotenv = require('dotenv');

// getting all ENV variables before starting another processes
dotenv.config();

module.exports = {
    mongoDbUrl: process.env.MONGO_DB_URL,
    tokenSecretKey: process.env.TOKEN_SECRET_KEY,
    port: process.env.PORT
}