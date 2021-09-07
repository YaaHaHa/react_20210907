/* 

    该文件是专门用于创建Count组件相关的action
*/
import {INCREMENT,DECREMENT} from './contant'
export function createincrementAction(numner){
    return {type:INCREMENT,data:numner}
}

export function createdecrementAction(number){
    return {type:DECREMENT,data:number}
}