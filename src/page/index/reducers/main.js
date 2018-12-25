import tabReducer from './tabReducer.js';
import categoryReducer from './categoryReducer'
import scrollViewReducer from 'component/ScrollView/scrollViewReducer'

import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
const reducers=combineReducers(
    {
        tabReducer,
        categoryReducer,
        scrollViewReducer,
        router: routerReducer
    }
);
export default  reducers