import {createStore,applyMiddleware} from 'redux';
import mainReducer from './reducers/main.js';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory'

import {routerMiddleware} from 'react-router-redux'

const history = createHistory()
history.push('home')
const middleware = routerMiddleware(history)
const store=createStore(mainReducer,applyMiddleware(thunk,middleware));
if(module.hot){
    module.hot.accept('./reducers/main.js',()=>{
        const nextRootReducer=require('./reducers/main.js').default;
        store.replaceReducer(nextRootReducer)
    });
}
module.exports={
    store,
    history
}
export default store