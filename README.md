# 靠谱工程师

### 进程和线程的区别，协程呢
1. 进程是一个资源的容器，为进程提供共享资源，是对程序的一种静态描述
2. 线程是计算机最小调度和运行的单位，是对程序的动态描述

### TCP,UDP区别
1. 基于连接与无连接
2. 对系统资源的要求(TCP较多，UDP较少)
3. UDP程序结构简单
4. 流模式和数据报模式
5. TCP保证数据的正确性，UDP可能会丢包
6. TCP保证数据顺序, UDP不保证

### osi 七层模型和tcp/ip四层模型
物理层，数据链路层，网络层，传输层，表示层，应用层
物理层，数据层，网络层，应用层

### jsonp跨域
跨域: 浏览器的同源策略限制，域名，端口，协议必须相同
jsonp是给请求处理时传入一个回调函数，后端将返回的结果以函数参数的形式返回回来

### http2
多路复用，长连接

### http3用udp协议的好处
丢包会需要确认，浪费至少一个ttfb

丢包不影响后续的数据传输

### http缓存头
Cache-Control：

区别
Last-Madified
Etag

## 区别defer async
defer相当于普通的script标签放到最后引入
acync异步请求，请求回来立即执行

### xxs csrf攻击原理 

### loadmore js实现

### 模块化发展
1. js没有模块化方案
2. nodejs出现commonjs
2. amd，cmd
3. ES6
4. ES7异步导入

### [] == (![])

### Property Attribute区别
对象的原型：获取的是引用的对象
标签的属性：获取来的是字符串

### reverse
字符串反转，考虑表情图标(unicode,每个字符的长度>=2)，不能使用split截取来拆分数组
正解：使用Array.from转化为数组

### for forEach for..in for..of区别

for: 性能最好，遍历数组要先保存长度，
> for(let i = arr.length; i >= 0; i --){}
forEach: Array原型的方法，传入处理函数，
for...in: 遍历对象，
for...of: 遍历有部署迭代接口(数组，集合)，**对象默认没有迭代接口**
- 给对象添加迭代接口实现for...of遍历
```javascript
Object.prototype[Symbol.iterator] = function* () {
	for (const [ key, value ] of Object.entries(this)) {
		yield {key, value} 
	}
}
```

### 对象深拷贝(考虑set，map，循环引用)

### debounce throttle

### 异步相关  ==> node和浏览器的区别
await和then
宏任务
微任务
微任务是引擎队列维护，宏任务是浏览器维护

## 洋葱模型