import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { publicRoutes } from '../routes';
import { NEWS_ROUTE } from '../utills/const';
// import { useSelector } from 'react-redux';

const AppRouter = () => {
    // const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Switch>
            {publicRoutes.map( ({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={NEWS_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;