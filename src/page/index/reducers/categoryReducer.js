import {GET_HEADER_DATA, GET_LIST} from '../actions/actionTypes.js'

const initState = {
    homeData: {},
    list:{},
    product:[]
};
const getHeaderData = (state, action) => {
    return {
        ...state,
        homeData: action.obj.data,
    }
};
const getList=(state,action)=>{
    if(action.pageIndex===1){
        return{
            ...state,
            list:action.obj.data,
            product:action.obj.data.list
        }
    }else{
        let product=state.product;
        return{
            ...state,product:product.concat(action.obj.data.list)
        }
    }

};
const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_HEADER_DATA:
            return getHeaderData(state, action);
        case GET_LIST:
            return getList(state, action);
        default:
            return state
    }
};
export default categoryReducer