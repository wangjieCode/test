function getProperty(obj, str) {
	const arr = str.split(".");
	let result = undefined;
	for (let i = 0; i < arr.length; i++) {
		obj = obj[arr[i]];
		result = obj
		if (result === undefined) {
			return undefined
		}
	}
	return result
}
var abj = {
    a: {
			b: {
				c:1
			}
		}
}
console.log( getProperty(abj,"a.b.y.x"))




function Observer() {
    this.arr = {};
}
Observer.prototype.listen = function (ele, cb) {
	let r = ele
  this.arr[r] = cb;
};
Observer.prototype.trigger = function () {
		for( let i = 0; i < arguments.length; i ++){
			console.log(
			this.arr[ arguments[i] ]()
			)
		}
}
Observer.prototype.remove = function (ele, cb) {
    for( var prop in this.arr ){
        if( ele === prop ) {
            delete this.arr[prop];
            cb()
        }
    }
}
Array.prototype.multiply = function() {
    var arr = [];
    for (var i = 0; i < this.length; i ++ ){
        arr.push( this[i] * this[i] );
    }
    return arr;
}
let r = new Observer();
// r.listen("mmp", () => console.log("mmp") );
// r.trigger("mmp")
// console.log(r)





var a = [1, 2, 3, 4, 5];
a.multiply();
// console.log(a);
// [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]