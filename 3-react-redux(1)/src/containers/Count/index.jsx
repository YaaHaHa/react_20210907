/* 
	准备一个容器组件，该组件主要负责：和redux进行数据的交互，
	可以随意的使用redux的API，和UI组件是父子关系
*/


// 引入connect用于连接UI与redux。且connect()()可生成组件
import {connect} from 'react-redux'

// 引入UI组件
import CountUI from '../../components/Count'

import {createincrementAction,createdecrementAction,incrementasuncAction} from '../../redux/count_action'
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
const CountContainer =connect(mapStateToProps,mapDispatchToProps)(CountUI);

// 暴露容器组件
export default CountContainer;
