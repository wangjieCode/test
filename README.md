# 迭代器和生成器

## 迭代器和迭代协议
> 如果一个对象具有next方法，并且next方法满足一定的约束
- value: any类型, 下一个数据的值
- done: boolean类型, 是否已经迭代完成
```js
const iterator = {
	next(){
		return {
			value:,
			done:
		}
	}
}
```


## 生成器

#### 生成器函数的特点：
> 生成器全部为可控的：**抛错，中断。。。**

- 调用生成器函数，会返回一个生成器，而不是执行函数体（因为，生成器函数的函数体执行，收到生成器控制）
- 每当调用了生成器的next方法，生成器的函数体会从上一次yield的位置（或开始位置）运行到下一个yield
- yield关键字只能在生成器内部使用，不可以在普通函数内部使用
- 它表示暂停，并返回一个当前迭代的数据
- 如果没有下一个yield，到了函数结束，则生成器的next方法得到的结果中的done为true
- yield关键字后面的表达式返回的数据，会作为当前迭代的数据
- 生成器函数的返回值，会作为迭代结束时的value
但是，如果在结束过后，仍然反复调用next，则value为undefined
- 生成器调用next的时候，可以传递参数，该参数会作为生成器函数体上一次yield表达式的值。
生成器第一次调用next函数时，传递参数没有任何意义
生成器带有一个throw方法，该方法与next的效果相同，唯一的区别在于：
next方法传递的参数会被返回成一个正常值
- **throw方法传递的参数是一个错误对象，会导致生成器函数内部发生一个错误。
生成器带有一个return方法，该方法会直接结束生成器函数
- 若需要在生成器内部调用其他生成器，注意：如果直接调用，得到的是一个生成器，如果加入*号调用，则进入其生成器内部执行。如果是yield* 函数()调用生成器函数，则该函数的返回结果，为该表达式的结果**

>在function关键字后**加*,** 函数即为一个生成器函数

### 
### yield表达式的返回的结果为调用next函数的参数

函数执行会返回一个迭代对象

### ganerater函数
```javascript
const ganerater = function* (){

}
console.log(ganerater());
//ganerator {<closed>}

console.log(ganerater().next());
//{value: undefined, done: true}

```
- 函数生成

### ganerater函数的执行顺序
```javascript
const ganerater = function* (){
	console.log("函数执行开始")
}
const gan = ganerater();
//控制台无结果

gan.next()
// "函数开始执行"
// {value: undefined, done: true}
 
```
- 在调用next后才会开始执行

### yield关键字
```javascript
const ganerater = function* (){
	console.log("函数执行开始");
	yield;
	console.log(1);
	yield;
	console.log(2);
}
const gan = ganerater();
//控制台无结果

gan.next()
// "函数开始执行"
// {value: undefined, done: false}

gan.next()
// 1
// {value: undefined, done: false}

gan.next()
// 2
// {value: undefined, done: false}

gan.next()
// {value: undefined, done: ture}
```
- 函数会在yield关键字前暂停，等待下一次next调用

**在此我们会发现value的值始终为undefined**

### value值
```javascript
const ganerater = function* (){
	console.log("函数执行开始");
	const value1 = yield 1;
	console.log(1, value1);

	const value2 = yield 2;
	console.log(2, value2);
}
const gan = ganerater();

```

- yield产生的值不会向左赋值
- yield产生的值为下一次迭代对象value的值

```javascript
gan.next()
// "函数开始执行"
// {value: undefined, done: false}

gan.next()
// 1 undefined
// {value: 1, done: false}

gan.next()
// 2 undefined
// {value: 2, done: false}

gan.next()
// {value: undefined, done: ture}
```

```javascript
const ganerater = function* (){
	console.log("函数执行开始")
}
const gan = ganerater();
//控制台无结果

gan.next()
// "函数开始执行"
// {value: undefined, done: true}
 
```
- 在调用next后才会开始执行

### yield关键字

#### yield表达式的返回的结果为调用next函数的参数
```javascript
const ganerater = function* (){
	console.log("函数执行开始");
	const value1 = yield 1;
	console.log(1, value1);

	const value2 = yield 2;
	console.log(2, value2);
}
const gan = ganerater();
//控制台无结果

gan.next(100)
// "函数开始执行"
// {value: undefined, done: false}

gan.next(200)
// 1 200
// {value: undefined, done: false}

gan.next(300)
// 2 300 
// {value: undefined, done: false}

gan.next(400)
// {value: undefined, done: ture}
```




### 利用生成器实现async，await效果

```javascript

function request() {
	return new Promise(res => {
		setTimeout(_ => res("生成成功"), 2000)
	})
}

function* task() {
	console.log("开始开始")
	const value = yield request();
	console.log(value)
	const result = yield '结束';
	console.log(result);
}

function startRun(params) {
	const ganerator = params();
	run(ganerator);
	function run(nextVlue) {
		const result = ganerator.next(nextVlue);
		//判断迭代是否结束
		if(result.done) return;
		//拿到每次迭代的value值
		const value = result.value;
		//简易判断value值是否为promise
		if (typeof value.then === "function") {
			value.then(data => run(data));
		} else {
		//不是promise直接执行下一次迭代
			run(value)
		}
	}
}

startRun(task);
/**
 * 开始生成
 * 。。。。2s后
 * 生成成功
 * 结束
 * /
```