import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer'
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
const reducers=combineReducers(
    {
        tabReducer,
        categoryReducer,
        router: routerReducer
    }
);
export default  reducers