const ApiError = require("../error/ApiError");
const {User} = require('../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
require('dotenv').config();

class UserController {
    

    static generateToken(id, email, role) {
        return jwt.sign(
            {id , email, role},
            process.env.SECRET_KEY,
            {expiresIn: '1h'}
        );
    }

    async registration(req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return next(ApiError.badReguest('Некоректный email или password'));
        }
        const {email, password, role} = req.body;
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badReguest('Такой пользователь уже существует'));
        }

        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const token = UserController.generateToken(user.id, user.email, user.role);

        return res.json({
            message: 'User was created',
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
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

        const token = UserController.generateToken(user.id, user.email, user.role);

        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        });
    }

    async check(req, res, next) {
        try {
            const user = await User.findOne({id: req.user.id}); 
            const token = UserController.generateToken(user.id, user.email, user.role);
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
}

module.exports = new UserController();