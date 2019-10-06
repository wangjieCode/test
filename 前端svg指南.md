# svg
- 矢量，利用标签
- 利用标签和css作图
## 比例尺viewBox
- > 地图放大缩小
## 标签
- 线段:line
  - x1，y1: x2, y2依次 
- 矩形:rect
  - 圆角xr，yr
> 闭合的图形不需要手动stroke
- 圆形:cricle
  - r半径，cx，cy圆心
- 椭圆:ellipse
  - 短半径，长半径rx,ry,圆心cx,cy
- 折线:polyline
	- point依次填入坐标
> 默认自动填充 fill置空   
- polygon
  - 和polyline区别是会自动闭合
- 文本:text
  - x,y位置
- **path**
  - d属性:M起点 L目标点 l
  - H水平 V竖直
  - z:不区分大小写，闭合线段
  - A
- 大写字母绝对位置,小写相对位置
## 属性
- troke
- troke-width
- fill-opacity
- stoke-opacity
- stroke-linecap:线段端点样式
- stroke--linejoin:线段相交样式
## 做一个直线
stroke: **color**
stroke-width: **px**
## 曲线
> M起点 A长弧，短弧 旋转角度 大弧0/1小狐  顺时针0/1逆时针
## 线性渐变
<defs>
	<linearGradient 
		x1,y1
		x2,y2
	>
		<stop offset="" style-color></stop>
		<stop offset="" style-color></stop>
	</linearGradient>
<defs>

> 使用fill: url(```id```)引用

## 高斯模糊
<defs>
	<></>
<defs>

## 虚线