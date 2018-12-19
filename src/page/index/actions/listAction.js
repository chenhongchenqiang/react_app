import {GET_LIST} from './actionTypes.js';
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