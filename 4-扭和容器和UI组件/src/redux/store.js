/* 
    该文件是整个redux最核心的store对象

*/

// 引入createStore。用于创建store对象
import {createStore,applyMiddleware} from 'redux'
// 引入为count组件服务的reducer，用于初始化状态、加工状态。就相当于后厨，开店前就要给store老板准备好
import countReducer from './count_reducer';
import thunk from 'redux-thunk'


export default createStore(countReducer,applyMiddleware(thunk));
