require('dotenv').config();

module.exports = {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '3306'),
    database: process.env.DB_NAME || 'test-db',
    dialect: 'mysql',
    seederStorage: 'sequelize',
    seederStorageTableName: 'SequelizeSeederData'
}