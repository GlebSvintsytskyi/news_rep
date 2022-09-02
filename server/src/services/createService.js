'use strict'

const {News} = require('../db/models');

class NewsService {
    createNews = async (object) => {
        return await News.create( object );
    }

    updeateNews = async (body, id) => {
     await News.update(body, 
            {
                where: {id},
            }
       )
       return await News.findOne(
            {
                where: {id},
            }
       )
    }

    deleteNews = async (id) => {
        return await News.destroy(
            {
                where: {id},
            }
        )
    }


    getAllNews = async () => {
        return await News.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
        });
    }

    getOneNews = (id) => {
        return News.findOne(
            {
                where: {id},
            }
       );
    }
}



module.exports = NewsService;