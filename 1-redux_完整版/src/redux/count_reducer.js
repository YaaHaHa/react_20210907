
import {INCREMENT,DECREMENT} from './contents'
export default function countReducer(preState=0,action){
    // let newState;
    // 从action中获取type和data
    const {type,data} =action;
    switch (type) {
        case INCREMENT:
            console.log(preState)
            return preState+data;
        case DECREMENT:
            return preState-data;
        default:
            return preState;    //一个也匹配不上，初始值也匹配不上，上一个
    }
    // return newState;在switch中返回了
}