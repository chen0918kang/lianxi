// 引入creatStore，创建redux中最关键的store
import {legacy_createStore as createStore} from 'redux'
// 引入为count组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)  //暴露store const store =createStore(countReducer)
                                                // export default store