// 继承原型 继承私有属性
// 
Plane.prototype.fly = function () {
	console.log("fly");
}

function Plane(name,blood) {
	this.name = name || '普通飞机';
	this.bloor = blood || 100
}
var temp = function(){}
temp.prototype = new Plane();
Transport.prototype = temp.prototype;
Transport.prototype.constructor = Transport
Transport.prototype.tran = function(){
	console.log("运输")
}
function Transport(){
	Plane.apply(this,arguments)
}
var Pl = new Plane()
var T1 = new Transport("运输飞机",300)
console.log(Pl,T1)