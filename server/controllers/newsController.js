'use strict'

const ApiError = require('../error/ApiError');
const NewsService = require('../services/createService');

class NewsController {
    #newService;
    constructor(){
        this.#newService = new NewsService();
    }
    

    create = async (req, res, next) => {
        try {
            const title = req.body.title;
            const description = req.body.description;

            const news = await this.#newService.createNews(title, description);

            return res.json(news);
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }

    }

    change = async (req, res, next) => {
        try {
           const id = req.params.id;
           await this.#newService.updeateNews(req.body, id);
               
           return res.status(200).json({message: 'Ok'});
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
    }

    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            await this.#newService.deleteNews(id);

            return res.status(200).json('Ok');
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
    }

    getOne = async (req, res, next) => {
        try {
            const id = req.params.id;
            const news = await this.#newService.getOneNews(id);
            return res.json(news);
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
     }
}

module.exports = new NewsController();

