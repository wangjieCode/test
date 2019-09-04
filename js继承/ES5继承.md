# 关于es5继承
 > 原型继承 私有属性继承
## 假设要实现一个飞机大战的游戏
- 有运输飞机和普通飞机两种
- 飞机有共有的方法
```
Plane.prototype.fly = function (){
	console.log('fly')
}
function Plane(name,blood) {
	this.name = name || '普通飞机';
	this.blood = blood || 100;
}
```
## 继承私有属性
借用构造函数
```
Transport.prototype.tran = function(){
	console.log("运输")
}
function Transport(){
	Plane.apply(this,arguments)//调用Plane的构造函数
}
```
测试
```
var T1 = new Transport("运输飞机",300)
console.log(T1)//Transport {name: "运输飞机", bloor: 100}
```
## 继承原型
- 共享原型``Transport.prototype = Plane.prototype;``
> 共享原型导致普通飞机拥有了运输的功能，
- 重置原型，使原型成为Plane对``Transport.prototype = new Plane();``
> 会使Transport的constructor变成Plane的
- 圣杯模式
```
//使用中介函数，最后将constructor重置
var temp = function(){}
temp.prototype = new Plane();
Transport.prototype = temp.prototype;
Transport.prototype.constructor = Transport
```
> 推荐
- 使用__proto__属性``Transport.prototype.__proto__ = Plane.prototype;``
- ``Object.setPrototypeOf(Transport.prototype,Plane.prototype)`` es6API