import {CHANGE_TAB} from './actionTypes.js';
export const changeTab=(obj)=>{
    return{
        type:CHANGE_TAB,
        obj:obj
    }
}
