/* 
	准备一个容器组件，该组件主要负责：和redux进行数据的交互，
	可以随意的使用redux的API，和UI组件是父子关系
*/


// 引入connect用于连接UI与redux。且connect()()可生成组件
import {connect} from 'react-redux'
import {Component} from 'react'

import {createincrementAction,
        createdecrementAction,
        incrementasuncAction
    } from '../../redux/count_action'

// UI组件
    class Count extends Component {
        increment=()=>{
            const {value} =this.checkNum;
            // 调用传过来的操作状态的方法，redux是通过store调用dispath，react-redux是通过props调用方法，方法里面再displath。相当于又套了一层
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
            // console.log('CountUI组件接收到的props：',this.props);
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
    

    
//mapStateToProps用于给UI组件映射redux中的状态，通过props传递。返回的是一个对象，因为props传递的一定是以key:value形式的
function mapStateToProps(state){
    return {he:state}
}



//借助传递操作状态的方法
function mapDispatchToProps(dispatch){
    return {
        jia:number => dispatch(createincrementAction(number)),
		jian:number => dispatch(createdecrementAction(number)),
		jiaAsync:number => dispatch(incrementasuncAction(number)),
    }
}
// 创建一个容器组件
const CountContainer =connect(mapStateToProps,mapDispatchToProps)(Count);

// 暴露容器组件
export default CountContainer;
