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