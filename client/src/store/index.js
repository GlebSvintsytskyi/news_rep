import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './userReducer';
import { newsReducer } from './newsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    content: newsReducer,
    auth: userReducer
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);