/* 
	该文件是Count组件的UI组件，只负责：结构的呈现、交互等，不可以见到任何redux相关的API
*/
import React, { Component } from 'react'
// 所有的redux的api都在store哪儿



export default class Count extends Component {
    increment=()=>{
        const {value} =this.checkNum;
        this.props.jia(value*1);
    }
    decrement=()=>{
        const {value} =this.checkNum;
        this.props.jian(value*1);
    }
    decrementodd=()=>{
        const {value} =this.checkNum;
        if (this.props.he %2 !== 0){
            this.props.jia(value*1);
        }
    }
    decrementasunc=()=>{
        const {value} =this.checkNum;
        // 异步只是action是一个函数，该交还带交出去
        this.props.jiaAsync(value*1);
    }

    render() {
        // 为什么会被传进去一个store？因为这是一个补救措施，防止我们传的时候失败了，给我们一个store一个补救措施
        console.log('CountUI组件接收到的props：',this.props);
        return (
            <div>
                <h1>{this.props.he}</h1>
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
