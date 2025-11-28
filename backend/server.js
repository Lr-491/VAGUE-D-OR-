const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.listen(2000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})