//创建对象
var book={
	topic:"JavaScript",
	fat: true
};

//通过.或[]访问对象属性
book.topic
book["fat"]
book.author="Flanagan";//通过赋值创建新属性

book.contents={};//{}是空对象没有属性

//数组（可改变长度）
var primes=[2,3,5,7]; //声明数组
primes[0]
primes.length
primes[primes.length-1]
primes[4]=9; //通过赋值添加新元素
primes[4]=11; //通过赋值改变已有元素
var empty=[]; //声明空数组

//数组和对象中都可以包含另一个数组或对象
var points=[
	{x:0,y:0},
	{x:1,y:1}
];//包含两个对象元素的数组
var date={
	trial1=[[1,2],[3,4]], //每一个属性都是数组
	trial1=[[2,3],[4,5]]  //数组的元素也是数组
}

var str="3"+"2";//+可完成加法运算也可连接字符串

var count=0;
count++;
count--;
count+=2;
count*=3;

"two">"three" //true: "tw"在字母表中的索引大于"th"

//面向对象，定义一个构造函数初始化新的Ponint对象
//混合的构造函数，原型方式
function Point(x,y){   //构造函数均以大写字母开头
	this.x=x;
	this.y=y;
 }

var p=new Point(1,1);

Point.prototype.r= function() {
	return Math.sqrt(this.x*this.x+this.y*this.y);
};

p.r()
// 说明：1.该模式是指混合搭配使用构造函数方式和原型方式 
// 2.将所有属性不是方法的属性定义在函数中（构造函数方式） 
// 将所有属性值为方法的属性利用prototype在函数之外定义（原型方式）

//创建对象的几种方法
//其二，工厂方式
var lev=function(){ 
	return "脚本之家"; 
}; 
function Parent(){ 
	var Child = new Object(); 
	Child.name="脚本"; 
	Child.age="4"; 
	Child.lev=lev; 
	return Child; 
}; 
var x = Parent(); 
alert(x.name); 
alert(x.lev()); 
// 说明： 
// 1.在函数中定义对象,并定义对象的各种属性，,虽然属性可以为方法，但是建议将属性为方法的属性定义到函数之外，这样可以避免重复创建该方法 
// 2.引用该对象的时候，这里使用的是 var x = Parent()而不是 var x = new Parent();因为后者会可能出现很多问题（前者也成为工厂经典方式,后者称之为混合工厂方式），不推荐使用new的方式使用该对象 
// 3.在函数的最后返回该对象 
// 4.不推荐使用这种方式创建对象，但应该了解 

//其三，构造函数方式
var lev=function(){ 
	return "脚本之家"; 
}; 
function Parent(){ 
	this.name="脚本"; 
	this.age="30"; 
	this.lev=lev; 
}; 
var x =new Parent(); 
alert(x.name); 
alert(x.lev()); 
// 说明： 
// 1.与工厂方式相比，使用构造函数方式创建对象，无需再函数内部重建创建对象，而使用this指代，并而函数无需明确return 
// 2.同工厂模式一样，虽然属性的值可以为方法，扔建议将该方法定义在函数之外 
// 3..同样的，不推荐使用这种方式创建对象，但仍需要了解

//其四，原型方式
var lev=function(){ 
	return "脚本之家"; 
}; 
function Parent(){ 

}; 
Parent.prototype.name="李小龙"; 
Parent.prototype.age="30"; 
Parent.prototype.lev=lev; 
var x =new Parent(); 
alert(x.name); 
alert(x.lev()); 
// 说明： 
// 1.函数中不对属性进行定义 
// 2.利用prototype属性对属性进行定义 
// 3.同样的，不推荐使用这样方式创建对象 

//客户端JS
function moveon(){
	//通过弹出对话框来询问用户问题
	var answer= confirm (准备ok？);
	//单击确定按钮浏览器会重新加载新页面
	if(answer){
		window.location="https://taobao.com"
	}
}
//在一分钟（6万毫秒）后执行定义的函数
setTimeout(moveon,60000);