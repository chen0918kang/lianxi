// 引入creatStore，创建redux中最关键的store
import {applyMiddleware, legacy_createStore as createStore,combineReducers} from 'redux'
// 引入为count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入，配合redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 总的reducer
const allReducer = combineReducers({
count:  countReducer ,
person:personReducer

})

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))  //暴露store const store =createStore(countReducer)
                                                // export default store