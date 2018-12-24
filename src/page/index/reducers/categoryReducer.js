import {
    GET_HEADER_DATA,
    GET_LIST,
    GET_CATEGORY,
    GET_MENU,
    CLEAN_CATEGORY
} from '../actions/actionTypes.js'

const initState = {
    homeData: {},
    list: {},
    product: [],
    Category: {},
    categoryProduct: [],
    Menu: {}
};
const getHeaderData = (state, action) => {
    return {
        ...state,
        homeData: action.obj.data,
    }
};
const getList = (state, action) => {
    if (action.pageIndex === 1) {
        return {
            ...state,
            list: action.obj.data,
            product: action.obj.data.list
        }
    } else {
        let product = state.product;
        return {
            ...state, product: product.concat(action.obj.data.list)
        }
    }
};
const cleanCategory = (state) => {
    return {
        ...state,
        Category:null,
        categoryProduct: null
    };

    return state;
};
const getCategory = (state, action) => {
    if (action.pageIndex === 1) {
        return {
            ...state,
            Category: action.obj.data,
            categoryProduct: action.obj.data.products
        }
    } else {
        let product = state.categoryProduct;
        return {
            ...state, categoryProduct: product.concat(action.obj.data.products)
        }
    }
};
const getMenu = (state, action) => {
    return {
        ...state,
        Menu: action.obj.data
    }
};

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_HEADER_DATA:
            return getHeaderData(state, action);
        case GET_LIST:
            return getList(state, action);
        case GET_CATEGORY:
            return getCategory(state, action);
        case CLEAN_CATEGORY:
            return cleanCategory(state, action);
        case GET_MENU:
            return getMenu(state, action)
        default:
            return state
    }
};

export default categoryReducer