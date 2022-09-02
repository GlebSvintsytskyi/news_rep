require('dotenv').config();
const express = require('express');
const sequelize = require('./db/conection');
const models = require('./db/models');
const cors = require('cors');
const router = require('./routes/index');
const corsMiddleware = require('./middleware/corsMiddleware');
const ApiErrorMiddleware = require('./middleware/ApiErrorMiddleware');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const { google } = require('googleapis');
const { v3 } = require('uuid');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());
app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', router);

app.use(ApiErrorMiddleware);

// const CLIENT_ID = '37386542431-2e1alnsq0ces5rnmc62dnl6og41uitj2.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

// const REFRESH_TOKEN = '1//04lzjg17ll08yCgYIARAAGAQSNwF-L9Ir_gVEGzMcSwiQipuoFPLs0TPgIq7xp0glJ_4uSIZZA5r37KgY6NsvX-7NV58uxo8jrW8';

// const auth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
// );

// auth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

// const drive = google.drive({
//     version: "v3",
//     auth: auth2Client
// })

// const filePath = path.join(__dirname, 'qqqqqqqq.jfif');

// const uploadFile = async () => {
//     try {
//         const response = await drive.files.create({
//             requestBody: {
//                 name: 'skate.jpg',
//                 mimeType: 'image/jpg'
//             },
//             media: {
//                 mimeType: 'image/jpg',
//                 body: fs.createReadStream(filePath)
//             }
//         });

//         console.log(response.data);
//         console.log(response.data.id);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const deleteFile = async () => {
//     try {
//         const response = await drive.files.delete({
//             fileId: '1g3-0npECsCf73rY1ynCYKjXNMI6aJdvy'
//         });

//         console.log(response.status);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const generatePublicUrl = async () => {
//     try {
//         const fileId = '1ELTaFxzDglIQ7UE5It3-aKKheDY2T3IG';
//         await drive.permissions.create({
//             fileId: fileId,
//             requestBody: {
//                 role: 'reader',
//                 type: 'anyone'
//             }
//         })

//         const result = await drive.files.get({
//             fileId: fileId,
//             fields: 'webViewLink'
//         })

//         console.log(result.data);
//         console.log(result.data.webViewLink);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

//uploadFile();
// deleteFile();
// generatePublicUrl();


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
