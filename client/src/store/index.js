import { createStore, combineReducers } from 'redux';
import { authReducer } from './userReducer'
import { newsReducer } from './newsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, composeWithDevTools());