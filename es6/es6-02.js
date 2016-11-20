//这个是用来学习变量的解构
var [a,b,c] = [1,2,3];
console.log(a);//按照相应的


let [x,y,z] = new Set(["a","b","c"]);
console.log(x);

var {bar,foo} = {foo:"hello",bar:"world"};
console.log(foo);

//函数参数的解构
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3

//箭头函数
var arr = [[1,2],[3,4]].map(([a,b])=>(a+b));
console.log(arr);

console.log("\u0061")
