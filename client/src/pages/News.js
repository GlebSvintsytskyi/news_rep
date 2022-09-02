import React, { useEffect } from "react";
import NewsItem from "../components/NewsItem";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../actions/news'
import { addNews } from '../store/newsReducer';

const News = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(state => state.content.isLoaded);
    useEffect(() => {
        if (!isLoaded) {
            fetchNews().then(data => dispatch( addNews(data) ));
        }
    });

    return(
        <NewsItem/>
    )
}

export default News;