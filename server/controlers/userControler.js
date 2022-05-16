const ApiError = require("../error/ApiError");
const {User} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(id, email, role) {
    return jwt.sign(
        {id , email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserControler {
    async registration(req, res) {
        const {email, password, role} = req.body;
        if(!email || !password) {
            return next(ApiError.badReguest('Некоректный email или password'));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badReguest('Такой пользователь уже существует'));
        }

        const hashPassword = await bcrypt.hash(password, process.env.SALT);
        const user = await User.create({email, role, password: hashPassword});
        const token = generateToken(user.id, user.email, user.role);

        return res.json({token});
    }

    async login(req, res, next) {
        const {email, password} = req.body;

        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('Такой email не зарегистрирован'));
        }

        const comparePassword = await bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Такой password не зарегистрирован'));
        }

        const token = generateToken(user.id, user.email, user.role);

        res.json({token});
    }

    async check(req, res, next) {
        const token = generateToken(req.user.id, req.user.email, req.user.role);
        res.send({token})
    }
}

module.exports = new UserControler();