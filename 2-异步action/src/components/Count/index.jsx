import React, { Component } from 'react'
// 所有的redux的api都在store哪儿
import store from '../../redux/store'
import {createincrementAction,createdecrementAction,incrementasuncAction} from '../../redux/count_action'


export default class Count extends Component {
    increment=()=>{
        const {value} =this.checkNum;
        store.dispatch(createincrementAction(value*1))
    }
    decrement=()=>{
        const {value} =this.checkNum;
        store.dispatch(createdecrementAction(value*1))
    }
    decrementodd=()=>{
        const {value} =this.checkNum;
        if (store.getState()%2 !== 0){
            store.dispatch(createincrementAction(value*1))
        }
    }
    decrementasunc=()=>{
        const {value} =this.checkNum;
        // 异步只是action是一个函数，该交还带交出去
        store.dispatch(incrementasuncAction(value*1))
    }

    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <select ref={ c => this.checkNum=c}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>

                </select>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>
                <button onClick={this.decrementodd}>奇数加</button>
                <button onClick={this.decrementasunc}>异步加</button>

            </div>
        )
    }
}
