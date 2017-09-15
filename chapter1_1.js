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

