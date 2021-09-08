import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'


ReactDOM.render(<App />,document.getElementById('root'));
// 只要redux中的状态发生改变，这里就会被调用
store.subscribe(()=>{
    ReactDOM.render(<App />,document.getElementById('root'));
})

