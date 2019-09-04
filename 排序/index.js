//归并排序
const mergeSort = arr => {
	//采用自上而下的递归方法
	const len = arr.length;
	if (len < 2) {
		return arr;
	}
	// length >> 1 和 Math.floor(len / 2) 等价
	let middle = Math.floor(len / 2),
		left = arr.slice(0, middle),
		right = arr.slice(middle); // 拆分为两个子数组
	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const result = [];

	while (left.length && right.length) {
		// 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	while (left.length) result.push(left.shift());

	while (right.length) result.push(right.shift());

	return result;
};
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.time('归并排序耗时');
// console.log('arr :', arr.sort((a,b) => b-a ));
// console.timeEnd('归并排序耗时');
// console.log(arr.shift(),arr)



//快速排序
const fastSort = (arr) => {
	if( arr.length < 1 ) return arr;
	const tempIndex = Math.floor( arr.length / 2 );
	const tempIndexVal = arr.splice( tempIndex, 1 )[0];
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length; i ++) {
		arr[i] < tempIndexVal ? left.push(arr[i]) : right.push(arr[i]);
	}
	return fastSort( left ).concat( tempIndexVal, fastSort( right ));
};
// console.time("快速排序耗时");
// console.log( fastSort(arr) );
// console.timeEnd("快速排序耗时");

//堆排序
const stackSort = (arr) => {
	arr.forEach( ele => {

	})
};






function NearestSmallerValues(arr) {
	let newarr = [];
	arr.forEach( ( ele,index ) => {
		let tem = [];

			for ( let i = 0; i <= index - 1; i ++){
				if( arr[i] < ele) {
					tem.push( arr[i] )
				}
			}

		if( tem[0] != null ) {
			newarr.push( tem[ tem.length - 1] );
		}else {
			newarr.push( -1 );
			console.log(undefined)
		}

	});
	// code goes here
	return newarr.forEach( ele => {
		if(ele === "undefined"){
			ele = -1
		}
	});

}
function WordSplit(strArr) {
	let str = "";
	let res = strArr[1].toString().split(",");
	for ( let i = 0; i < res; i ++){
		let len = res[i].length;
		console.log( strArr[0].splice(0,len) );
		if( strArr[0].splice(0,len) == res[i] ){
			str += res[i];
		}
	}
	return str;
}

// console.log(
// 	WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])
// )

function abc() {
	const arr = arguments[0].split(",")
	const target = arr.pop();
	let reult = null;
	arr.forEach( (ele,index) => {
		for (let i = index + 1; i < arr.length ;i++) {

			if(parseInt(ele) + parseInt( arr[i]) == target) {
				reult += index += i;
			}
		}
	});
	return reult;
}


var makeOdd = function(s) {
	const len =  s.length;
	let newStr = '#';
	for (let i = 0; i < len; i ++){
		newStr += s[i] + '#';
	}
	return newStr;
};
// let res = makeOdd("baad");
// console.log(res)
function judge(str) {
	(str.length%2 === 0) && (str = makeOdd(str));
	let len = str.length,
		half = Math.floor( len / 2 ),
		last = len - half;
	let i = 0;
	let res = '';
	while ( i < last ){
		if( str[half - i] !== str[ half + i] ){
			return false;
		}
		i ++;
	}
	return true
}
function getAllSubs(str){
	var len = str.length,
		res = [];
	let maxlen = null;
	for(var i = 0;i<len;i++){
		for(var j = i;j<len;j++){
			var sub = str.substring(i,j+1);
			console.error(sub);
			if(sub && judge(sub)){
				res[res.length] = sub;
			}
		}
	}
	return res;
}
// console.log(getAllSubs('abaac'));
var threeSum = function(nums) {
	const newArr = [];
	nums.sort( (a,b) => a - b );
	nums.forEach( (ele,index) => {
		let temp = [];
		for (let i = index + 1; i < nums.length; i ++){
			for (let j = i + 1; j < nums.length; j ++){
				if( ele + nums[i] + nums[j] == 0 && temp[0] == undefined ){
					temp.push( ele, nums[i],nums[j]);
					// console.log( temp )
					newArr.push( temp );
				}
			}
		}
	});
	return newArr;
};
// console.log(threeSum([0,0,0,0,0]))

function Find ( target, array ){
	const arr = new Array();
	array.forEach( ele => arr.push(...ele) );
	return arr.includes(target)
	
}
// console.log(Find(7, [
// 				[1, 2, 8, 9],
// 				[2, 4, 9, 12],
// 				[4, 7, 10, 13],
// 				[6, 8, 11, 15]
// 			]
// ))
function replaceSpace(str) {
	return str.replace(/\ /g, "%20")
}
console.log(replaceSpace("We Are Happy"))