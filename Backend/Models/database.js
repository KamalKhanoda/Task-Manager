const mongoose = require('mongoose');
require('dotenv').config();

const db_url = process.env.db_url;
mongoose.connect(db_url).then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed:", err);
});