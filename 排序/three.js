




// function threeArr(arr) {
// 	var newArr = [];
// 	var len = arr.length;
// 	for (var i = 0; i < len; i++) {
// 		for (var j = i + 1; j < len; j++) {
// 			for (var m = j + 1; m < len; m++) {
// 				var a = arr[i],
// 					b = arr[j],
// 					c = arr[m];
// 				if (a + b + c == 0) {
// 					newArr.push([a, b, c]);
// 				}
// 			}
// 		}
// 	}
// 	return newArr;
// }
// var newArr = threeArr([0, 0, 0, 0, 0]);
// newArr.forEach(function (item, index) {
// 	item.sort();
// });
// for (var i = 0; i < newArr.length; i++) {
// 	for (var j = i + 1; j < newArr.length; j++) {
// 		if (
// 			newArr[i][0] == newArr[j][0] &&
// 			newArr[i][1] == newArr[j][1] &&
// 			newArr[i][2] == newArr[j][2]
// 		) {
// 			newArr.splice(i, 1);
// 		}
// 	}
// }
// console.log(newArr);