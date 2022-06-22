'use strict'

const {News} = require('../models/models');

class NewsService {
    createNews = (title, description) => {
        const news = {title, description}
        return News.create( news );
    }

    updeateNews = (body, id) => {
        return News.update(body, 
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


    getOneNews = (id) => {
        return News.findOne(
            {  
                where: {id},
            },
        ) 
    }
}



module.exports = NewsService;