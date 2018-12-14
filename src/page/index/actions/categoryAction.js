import {GET_HEADER_DATA} from './actionTypes.js';
import axios from 'axios';
export const getHeaderData=()=>(dispatch)=>{
    axios({
        method:'post',
        url:window.pageConfig.RequestBaseUrl+'/api/index4phone',
        headers: {'content-type': 'application/json'},
    }).then(res=>{
        dispatch({
            type:GET_HEADER_DATA,
            obj:res.data
        })
    })
}