# 迭代器和生成器

## 迭代器和迭代协议
> 如果一个对象具有next方法，并且next方法满足一定的约束
- value: any类型, 下一个数据的值
- done: boolean类型, 是否已经迭代完成
```javascript
const iterator = {
	next(){
		return {
			value:,
			done:
		}
	}
}
```