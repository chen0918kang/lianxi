// 引入creatStore，创建redux中最关键的store
import {applyMiddleware, legacy_createStore as createStore} from 'redux'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'
// 引入thunk，用于支持异步action
import thunk from 'redux-thunk'
export default createStore(countReducer,applyMiddleware(thunk))  //暴露store const store =createStore(countReducer)
                                                // export default store