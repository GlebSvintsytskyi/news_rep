const {News} = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsController {
    async create(req, res, next) {
        try {
            const {title, description} = req.body;
            const news = await News.create( {title, description} );

            return res.json(news);
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }

    }

    async change(req, res) {
        try {
           const {id} = req.params;
           await News.update(req.body, 
                {
                    where: {id},
                }
           )

           return res.status(200).json({message: 'Ok'});
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            await News.destroy(
                {
                    where: {id},
                }
            )

            return res.status(200).json('Ok');
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params;
            const news = await News.findOne(
                {  
                    where: {id},
                },
            ) 
            return res.json(news);
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
     }
}

module.exports = new NewsController();

