console.log("start");

setTimeout( _ => {
	console.log("big")
})

new Promise( res => {
	res("mmp");
}).then( res => console.log(res) );