import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
// 引入大家长Provider，给每个容器传shore
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById('root'));
// 只要redux中的状态发生改变，这里就会被调用,Provider帮我们检测了，这里就不需要了
/* store.subscribe(()=>{
    ReactDOM.render(<App />,document.getElementById('root'));
}) */

