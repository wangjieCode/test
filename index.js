// console.log("start");

// setTimeout( _ => {
// 	console.log("big")
// })

// new Promise( res => {
// 	res("mmp");
// }).then( res => console.log(res) );

// Object.prototype[Symbol.iterator] = function* () {
// 	for (const [ key, value ] of Object.entries(this)) {
// 		yield {key, value} 
// 	}
// }
// const obj = {
// 	name:"m",
// }
// console.log(...obj)
function jump (n){
	if(n == 1) return 1;
	if(n == 2) return 2;
	return jump(n-1) + jump(n -2); 
}

console.log(jump(10))
