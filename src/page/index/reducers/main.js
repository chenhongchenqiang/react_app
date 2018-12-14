import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer'
import {combineReducers} from 'redux';
const reducers=combineReducers(
    {
        tabReducer,
        categoryReducer
    }
);
export default  reducers