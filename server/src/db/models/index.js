'use strict'

const sequelize = require('../conection');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    userId: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING},
    imgId: {type: DataTypes.STRING}
})

User.hasMany(News);
News.belongsTo(User);

module.exports = {
    User,
    News
} 