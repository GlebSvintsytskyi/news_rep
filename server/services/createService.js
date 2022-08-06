'use strict'

const {News} = require('../models/models');

class NewsService {
    createNews = (title, description, userId) => {
        const news = {title, description, userId}
        return News.create( news );
    }

    updeateNews = async (body, id) => {
     await News.update(body, 
            {
                where: {id},
            }
       )
       return News.findOne(
            {
                where: {id},
            }
       )
    }

    deleteNews = (id) => {
        return News.destroy(
            {
                where: {id},
            }
        )
    }


    getAllNews = () => {
        return News.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
        });
    }
}



module.exports = NewsService;