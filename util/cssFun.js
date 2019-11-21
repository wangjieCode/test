import { type } from "./base.js"

const transformAttr = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'scale', 'scaleX', 'scaleY', 'translateX', 'translateY', 'translateZ'];

window.css = (el, attr) => {
	// true表示设置css，false表示获取css样式
	const setOrGet = type(attr) === "object" ? false : true;
	if (setOrGet) { //获取
		if (transformAttr.includes(attr) ) { // css3
			return transfrom()
		}else {	//css2
			return parseFloat(getComputedStyle(el)[attr])
		}
	} else { // 设置
		const attrKeys = Object.keys(attr);
		for(let len = attrKeys.length; len >= 0; len-- ){
			el.style[attrKeys[len]] = attrKeys[len] == 'opacity' ? attr[attrKeys[len]] : attr[attrKeys[len]] + 'px';
		}
		transfrom(attrKeys)
	}
	function transfrom(attrKeys) {
		if (!el.transform) {
			el.transform = {};
		}
		if(setOrGet){
			if (!Object.keys(el.transform).includes(attr)) {	//如果这个条件不成立就代表没有设置过
				if (attr == 'scale') {	//因为scale与其它属性的默认值是不一样的，所以判断
					return 1;
				} else {
					return 0;
				}
			}
			return el.transform[attr];
		}

		for (let v of attrKeys) {	//这一步是把用户要设置的所有属性存到el.transform
			el.transform[v] = attr[v];
		}
		let str = '';	//用来拼接所有要设置的属性（transform）	transform: rotate(60deg) scale(2) translateY(100px);


		for (let v in el.transform) {
			switch (v) {
				case 'rotate':
				case 'rotateX':
				case 'rotateY':
				case 'rotateZ':
				case 'skewX':
				case 'skewY':
					//str+='rotate(60deg)'
					str += v + `(${el.transform[v]}deg) `;
					break;
				case 'scale':
				case 'scaleX':
				case 'scaleY':
					str += v + `(${el.transform[v]}) `;
					break;
				case 'translateX':
				case 'translateY':
				case 'translateZ':
					str += v + `(${el.transform[v]}px) `;
					break;
			}
		}
		el.style.transform = str;
	}
}
