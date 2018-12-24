import {GET_LIST,GET_CATEGORY,GET_MENU,CLEAN_CATEGORY} from './actionTypes.js';
import axios from 'axios';
export const getList = (request) => (dispatch) => {
    let instance = axios.create({
        headers: {'content-type': 'text/json;charset=UTF-8'}
    });
    instance.post(window.pageConfig.RequestBaseUrl + '/api/product/getProductByTypeId', request).then(res =>{
        dispatch({
            type: GET_LIST,
            obj: res.data,
            pageIndex:request.pageIndex
        })
    });
};

export const getCategory = (request) => (dispatch) => {
    let instance = axios.create({
        headers: {'content-type': 'text/json;charset=UTF-8'}
    });
    instance.post(window.pageConfig.RequestBaseUrl + '/api/product/list4phone', request).then(res =>{
        dispatch({
            type: CLEAN_CATEGORY,
        });
        dispatch({
            type: GET_CATEGORY,
            obj: res.data,
            pageIndex:request.pageIndex
        })
    });
};

export const getMenu=()=>(dispatch)=>{
    let instance = axios.create({
        headers: {'content-type': 'text/json;charset=UTF-8'}
    });
    instance.post(window.pageConfig.RequestBaseUrl + '/api/getCategoryList').then(res =>{
        dispatch({
            type: GET_MENU,
            obj: res.data,
        })
    });
}