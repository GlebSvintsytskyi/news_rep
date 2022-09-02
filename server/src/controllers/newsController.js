const ApiError = require('../error/ApiError');
const NewsService = require('../services/createService');
const uuid = require('uuid');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const { google } = require('googleapis');
const GoogleDriveService = require('../services/googleDriveService');
const { News } = require('../db/models/index');


class NewsController {
    #newService;
    #googleDriveService;
    constructor(){
        this.#newService = new NewsService();
        this.#googleDriveService = new GoogleDriveService();
    }
    

    create = async (req, res, next) => {
        try {
            const title = req.body.title;
            const description = req.body.description;
            const userId = req.user.id;

            const images = await this.#googleDriveService.uploadFiles(req.file);
                        
            const news = await this.#newService.createNews({title, description, userId, img: images.url, imgId: images.imgId});
            return res.json(news);
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }

    }

    change = async (req, res, next) => {
        try {
           const id = req.params.id;
           const news = await this.#newService.updeateNews(req.body, id);
               
           return res.json(news);
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
    }

    delete = async (req, res, next) => {
        try {
            const id = req.params.id;
            const { imgId } = await this.#newService.getOneNews(id);
            await this.#googleDriveService.deleteFiles(imgId);
            await this.#newService.deleteNews(id);

            return res.status(200).json('Ok');
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
    }

    getAll = async (req, res, next) => {
        try {
            const news = await this.#newService.getAllNews();
            return res.json({news});
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
     }

     getOne = async (req, res, next) => {
        try {
            const id = req.params.id;
            const news = await News.findOne({
                where: {id}
            });
            return res.json({news});
        } catch (error) {
            next(ApiError.badReguest(error.message));
        }
     }
}

module.exports = new NewsController();

