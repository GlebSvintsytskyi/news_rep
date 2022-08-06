import axios from 'axios';
import { authHost } from './index';
import { pushNews, deleteNew, putNews } from '../store/newsReducer'

export const fetchNews = async () => {
        try {
            const {data} = await axios.get('http://localhost:5000/api/news/');
            return data.news;
            
        } catch (error) {
            console.log(error);
        }
}

export const createNews = (title, description) => {
    return async dispatch => {
        try {
            const response = await authHost.post('api/news/', {
                title,
                description,
            })
            dispatch( pushNews(response.data) );
            console.log(response.data)
            return response.data;
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const updeateNews = (id, title, description) => {
    return async dispatch => {
        try {
            const {data} = await authHost.put(`api/news/${id}`, {
                title,
                description
            });
            dispatch( putNews(data) );
            return data;
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteNews = (id) => {
    return async dispatch => {
        try {
            const {data} = await authHost.delete(`api/news/${id}`);
            dispatch( deleteNew(id) );
            return data;
            
        } catch (error) {
            console.log(error);
        }
    }
}