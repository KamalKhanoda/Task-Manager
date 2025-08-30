const express = require('express');
require('dotenv').config();
require('./Models/database');
const taskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.json());
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
