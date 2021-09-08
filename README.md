## 在redux.js中，直接执行，不要在判断了。就像点菜，后厨已经把菜上来了，才提要求，在点菜时就要想好。
这是一个纯函数

## 只要redux中的状态发生改变，这里就会被调用。React的原生状态改变了，setState会执行一次render，redux不会。
```js
store.subscribe(()=>{
    // 重新渲染App，因为Diffing算法，只有改变的虚拟dom被重新渲染 
    ReactDOM.render(<App />,document.getElementById('root'));
})
```

## 每个组件有一个actioncreate和reducer，他们有一个共同的store大家长

## 以上action是对象的，都是同步action，异步action是一个函数，需要使用中间件redux-thunk
redux里面有个applyMiddleware，在createstore中传入redux-thunk中的thunk并作为第二个参数
createStore(countReducer,applyMiddleware(thunk))
displash过去在ActionCreators停了下来，然后再走store，Renders
* 异步action中往往要开启一个同步action，以为异步到点了就要dispath了
store调的异步action，需要引入store,或者异步action函数传入一个displash，已经给我们准备好了
>同步action都是对象，异步action都是函数，因为他要开启异步任务。一般不会用，没必要使用，但是面试可能会问