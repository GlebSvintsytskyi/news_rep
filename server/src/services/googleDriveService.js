const { google } = require('googleapis');
const stream = require('stream');

class GoogleDriveService {
    #drive;
    constructor() {
        const CLIENT_ID = '37386542431-2e1alnsq0ces5rnmc62dnl6og41uitj2.apps.googleusercontent.com';
        const CLIENT_SECRET = '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';
        const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

        const REFRESH_TOKEN = '1//04lzjg17ll08yCgYIARAAGAQSNwF-L9Ir_gVEGzMcSwiQipuoFPLs0TPgIq7xp0glJ_4uSIZZA5r37KgY6NsvX-7NV58uxo8jrW8';

        const auth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URI
        );

        auth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

        this.#drive = google.drive({
            version: "v3",
            auth: auth2Client
        });
    }

    async uploadFiles(fileObject) {
        const bufferStream = new stream.PassThrough();
        bufferStream.end(fileObject.buffer);
        const { data } = await this.#drive.files.create({
            media: {
            mimeType: fileObject.mimeType,
            body: bufferStream,
            },
            requestBody: {
            name: fileObject.originalname,
            },
        });
        console.log(`Uploaded file ${data.name} ${data.id}`);
        await this.#drive.permissions.create({
                fileId: `${data.id}`,
                requestBody: {
                    role: 'reader',
                    type: 'anyone'
                }
            })
    
            const result = await this.#drive.files.get({
                fileId: `${data.id}`,
                fields: 'webViewLink'
            })

            const url = result.data.webViewLink;
            const imgId = data.id;
    
            return { url, imgId };
    }

    async deleteFiles(imgId) {
        try {
            await this.#drive.files.delete({
                fileId: imgId
            });
        } catch (error) {
            console.log(error.message);
        }
        }
}

module.exports = GoogleDriveService;