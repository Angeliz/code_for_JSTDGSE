//Math
Math.pow(2,53)              //2的53次幂
Math.round(0.6)				//四舍五入
Math.ciel(0.6)				//向上取整
Math.floor(0.6)				//向下取整
Math.abs(-5)				//绝对值
Math.max(x,y,z)				
Math.min(x,y,z)
Math.random()				//生成一个大于等于0小于1的伪随机数
Math.PI						//π
Math.exp   					//e
Math.sqrt(3)				//平方根
Math.pow(3,1/3)				//立方根
Math.sin(0)	
Math.log(10)				//10的自然对数
Math.log(100)/Math.LN10		//以10为底100的对数
Math.log(512)/Math.LN2		//以2为底512的对数
Math.exp(3)					//e的三次幂

//日期和时间
var then=new Date(2011,0,1);
var later=new Date(2011,0,1,17,10,30);
var now=new Date(); //当前日期和时间
var elapsed=now-then; //日期减法：计算时间间隔的毫秒数
later.getFullYear() //2011
later.getMonth() //0：从0开始计数的月份
later.getDate()
//1：从1开始计数的天数
later.getDay() //5:得到星期几，0代表星期日，1代表星期一
later.getHours() //当地时间17
later.getUTCHours() //使用UTC表示小时的时间，基于区时

