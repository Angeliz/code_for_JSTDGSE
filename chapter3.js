//指数计数法
6.02e23  //6.23乘10的23次方
1.47E-32  //1.47乘10的-32次方

//以下值将被转为false
undefined
null
0
-0
NaN
"" //空字符串

//字符串操作
str.slice(首，尾) //参数允许负数
str.substring(首，尾) //不允许负数
str.substr(首，长) 

//
10+" objects"  //"10 objects" 10转换成字符串
"7"*"4"   //28
var n=1-"x";   //NaN x无法转换为字符串
n+" objects"  //"NaN objects" NaN转换为字符串