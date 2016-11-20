//let定义的变量只是在代码块内是有效的，
{
	let names = "hello";
	var name = "world";
}
//在上面的代码块里面
// console.log(name);   //world
// console.log(names);  //names is not defined

//在for循环里定义使用let有的时候是很方便的
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// };
// console.log(i);

/*
//上面代码中，变量i是var声明的，在全局范围内都有效。所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值。 
var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = function(){
		console.log(i);
	};
};
a[6](); //10

//变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，其实跟下面的c  差不多 里面使用了立即执行函数
var b =[];
for (let i = 0; i < 10.; i++) {
	b[i] = function(){
		console.log(i);
	};
};
b[6]();//6

var c = [];
for (var i = 0; i < 10; i++) {
	(function(i){
		c[i] = function(){
			console.log(i);
		};
	})(i);
};
c[6]();  //6

//var会存在变量的提升  let不存在变量提升  所以要使用let定义的变量  一定要放在let定义之后使用

console.log(box1);
console.log(box2);
var box1 = "happy";   //定义了  但是值没有  所以是undefined 
let box2 = "day";    //不存在变量提升 所以就会  报 box2 is not  undefined
*/

//先定义了temp的全局变量  然后 又使用let  重新定义了该变量  将他绑定在这个块级区域 所以在在let定义之前的变量都会报错的
var temp = "开心麻花";
if(true){
	temp = "欢乐喜剧人";
	let temp;   // Uncaught ReferenceError: temp is not defined
}