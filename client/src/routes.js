import {LOGIN_ROUTE, REGISTRATION_ROUTE, NEWS_ROUTE } from './utills/const';
import Auth from './pages/Auth';
import News from './pages/News';

export const arrRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
]