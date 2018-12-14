import {GET_HEADER_DATA} from '../actions/actionTypes.js'
const initState = {
    homeData:{},
};
const getHeaderData=(state,action)=>{
    return{
        ...state,
        homeData:action.obj.data,
    }
};
const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_HEADER_DATA:
            return getHeaderData(state, action);
        default:
            return state
    }
};
export default categoryReducer