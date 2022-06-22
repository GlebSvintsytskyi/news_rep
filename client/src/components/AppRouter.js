import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { arrRoutes } from '../routes';
import { NEWS_ROUTE } from '../utills/const';

const AppRouter = () => {
    return (
        <Switch>
            {arrRoutes.map( ({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={NEWS_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;