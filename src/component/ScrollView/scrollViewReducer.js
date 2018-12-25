import {CHANGEREADYSTATE} from './scrollActionsTypes.js'

const initState = {
    readyToload:true
};

const changeState = (state, action) => {
    return {
        ...state, readyToload: action.obj
    }
};
const scrollViewReducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGEREADYSTATE:
            return changeState(state, action);
        default:
            return state
    }
}
export default scrollViewReducer;