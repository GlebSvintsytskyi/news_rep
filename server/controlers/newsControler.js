const {News} = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsControler {
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
        const id = req.params.id;

        News.update(req.body, {
            where: { id: id }
          })
          .then(() => {
             res.status(200).json({message: 'Ok'});
          })
          .catch((error) => {
            next(ApiError.badReguest(error.message));
          })
    }

    async delete(req, res) {
        const id = req.params.id;

        News.destroy({
            where: { id: id }
        })
        .then(() => {
            res.status(200).json('Ok');
        })
        .catch((error) => {
            next(ApiError.badReguest(error.message));
        })
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

module.exports = new NewsControler();

