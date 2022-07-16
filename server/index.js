require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const corsMiddleware = require('./middleware/corsMiddleware');
const ApiErrorMiddleware = require('./middleware/ApiErrorMiddleware');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(corsMiddleware);
app.use(express.json());
app.use('/api', router);

app.use(ApiErrorMiddleware);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
    
}

start();
