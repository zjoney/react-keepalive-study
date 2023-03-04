## keepalive-react-component
- React工作流程
- React Hook




我想知道为什么官方不出这种组件呢， 是这种组件会影响性能吗？

官方只是类库
同问
刷新后还在吗
动态缓存呢
vue 就有
不是框架
说是会造成内存泄漏
类似Vue 的keep-alive 缓存组件实例
react官方有解释过 可以去github看
添加一个用户用户列表会更新嘛，怎么弄
这两个都要用吗
react只是UI框架
这样接口是不是不会请求了
provider必须在route层吗
其他不管
貌似配合其他的状态管理的库不太兼容
react 感觉就是提供个基础的 ，任由开发者完



provider必须在route层吗 不需要
其他不管
貌似配合其他的状态管理的库不太兼容
react 感觉就是提供个基础的 ，任由开发者完
动画能保存吗
React17怎么不用引，能详细说下不
面试的时候，可以跟面试官说能自己实现keepalive  可以的
keeplive可以嵌套吗
这个是不是用的contextapi 状态存顶部了
难道Vue不是一个库吗
vue是框架
这个语法是什么
库和框架有啥区别
jquery就是一个库
catchStates是原有的吗
起名而已，主要是usereducer

为啥要用 usereducer 和 useState 有啥区别
就相当于this.state = { catchStates } 是这样吗
多个数据可以用reducer
usestate算usereduer的语法糖
reducer可以处理复杂数据
那像setNumber为什么就能是个函数呢
context
他返回数组，你只是接受之后解构
只有被withkeepalive包裹才能拿到context
有没有办法做到局部更新
某个key的值变化后，才通知对应的组件更新
正常的话就是局部更新
要用usememo来做一层优化吧
那是父组件更新导致子组件不必要的更新
所以说正常情况下
现在很多状态库都不用context来实现了吧
应该用到克隆吧
createProtal
那用什么？
react.clone?
React.createProtal
在父组件外创建节点？
引用路径改了么
@alitajs/keep-alive  和这个库的实现原理挺像的，之前用过这个，缓存页面多了就卡的很

ref
oldComponent
那不是渲染了两遍   props.children已经渲染一遍了
react源码里是有优人经，如果属性不变，是不会重新渲染的走domdiff
就是挂载的时候给每个原始组件创建了一个缓存，等下次用的时候，再拿出来用
可以通过ref拿了
卸载的时候是不是再更新一下缓存
没缓存过的 直接渲染并缓存 缓存过的直接拿缓存dom

这缓存的是初始状态吧
感觉这东西  有内存益处的风险吧
及时进行垃圾清理
看一下mount()函数
vue也是缓存的dom?
组件的状态呢，有缓存吗？
这套缓存方案可以为组件加激活钩子吗
dom很多，缓存策略是什么？
再看下 Provider呢
所有keepalive hoc包裹的组件一上来就都渲染了？
provider里面循环会显示子元素啊
reducer 函数 是不是用了单例缓存 state
你知道我想咋实现吗？ 直接拿到innerHTML()和状态去缓存，给他们加上一个标识就行，再次调用的时候通过标识去取出来渲染
Object.values这里也会渲染出真实到 到页面中吗
好像原生有 copyElement
props.children下面那一部分，不会渲染到页面中嘛？
provider里面 是否可以用fragement渲染真实dom?
应该可以


这种缓存怕刷新
多包装了div会影响布局的吧
直接外面弄个object存不行吗
缓存那里执行 catchState.map 时没有 return 将缓存 children 渲染到页面吧
还是不理解  为什么不用虚拟dom来做缓存 不可能的
你知道我想咋实现吗？直接拿到innerHTML()和状态去缓存，给他们加上一个标识就行，再次调用的时候通过标识去取出来渲染
我这种行吗 不行
provider 中 大括号 中渲染的 那个元素是什么意思
如果该缓存组件内的某个子子组件不需要缓存咋办
umi 里 配置式 路由就很尴尬
let routes = [
    KeepAliveHome()
]
我们之前的实现 不完全匹配 直接display:none
缓存怎么搞
直接使用React.fragment 不用div不行吗？
有个大问题是 redux状态和其他的一些context状态会丢失
请问keep-alive会缓存组件里的state状态吗？要是二次进来的时候，list的数据变化了，keep-alive缓存的就对不上了？
面试前端，要求会 UI 设计，这是合理的吗
不合理
都优秀

catchId是一个DOM节点？不是的 是cacheId是此缓存组件的唯一标识
当期的路径
这监听了组件的滚动事件，外层套的div那就没法去掉了 可以的
这感觉会和redux的props.dispatch冲突 不会的
缓存组件的 state 是没缓存的把 只是缓存DOM
Home 第一次结果 
如果属性变了，就需要重新生成了
被withKeepAlive包裹的oldComponent，首次接受props渲染时会执行oldComponent（props），并产生缓存doms。
当props变更为newProps时， 由于有缓存，就不会执行oldComponent（newProps）啦？那怎么得到正确的doms呢？
为什么 是捕获监听事件？  记录的是儿子们的滚动位置？？
事件委托
儿子的事件都会传递给父亲，在父亲那里监听 就可以了
useReducer 比 useState 有什么好处
useReducer可以更加详细的指定复杂的状态计算逻辑
可以计算复杂过程放在reducer里
useState没有这个过程。自己计算，直接把结果 传给useState
 as  ??
为啥官网不支持
是不是因为操作太多


keep还有思路
就是把这些信息全部存入redux 中。每次都是基于仓库中中的信息进行重新渲染


destroy的filter 过滤掉了 map里为啥还要判断
Provider 里 Object.values(cacheStates) 里的元素会不会渲染出来？
reactElement为啥没渲染出来？？
同文 reactElement为啥没渲染出来？？
还有个active激活没讲
provider中，reactElement为啥没渲染出来？？
这个组件在生产中能用吗？有经过项目验证吗？
symbol不更好？
Symbol
math.random（）可以保证唯一么？
V3原理是Symbol吗？
用symbol做惟一
看一下dom树
uuid库其实就是使用math.random
state也可以传进去，再渲染的时候，挂上去不就行了
不能恢复state。。感觉很多场景没法用吧
虚拟列表可缓存吗？？？？？
这种keep-alive是不是针对函数组件，类组件不适用？ 类组件的state无法保存，state变化了，组件还是原来的dom
什么情况 属性会变了哦
类组件如何使用？
可以存到页面url的参数里面吗
添加一个用户让用户列表刷新，能操作一下嘛


真正销毁缓存组件 useEffect里要取消监听把
useeffect那里需要return removeEventListener吗
岂不是 缓存的组件 会多渲染一次
reactElement  不是应该在页面有两个显示吗？
doms被拿走了
dom操作是一个剪贴的操作
<div id=1><div>

<div id =2>
divId2.appendCHild(dom1);
一般添加用户，用户列表组件会重新请求接口

