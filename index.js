// const obj = {
// 	next() {
// 		return {
// 			value: ,//下一个数据的值
// 			done: ,//是否已经迭代完成
// 		}
// 	}
// }


// const o = {
// 	[Symbol.iterator]
// }


//es7版本
function request() {
	return new Promise(res => {
		setTimeout(_ => res("生成成功"), 2000)
	})
}

async function boss() {
	console.log("开始开始")
	const value = await request();
	console.log(value)
	const result = await '结束';
	console.log(result);
}
boss()

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
		const result = ganerator.next(nextVlue)
		if(result.done) return;
		const value = result.value
		if (typeof value.then === "function") {
			value.then(data => run(data));
		} else {
			run(value)
		}
	}
}
startRun(task);