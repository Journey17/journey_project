document.getElementById("demo").innerHTML = "My Javascript";
document.write("<p> add my first </p>");

function btnW() {
    document.write("文档消失了。");
};

var i = 1,a = 2,c = i+a;
var u = "blue";
var d;
var e = a+2;
document.getElementById('bl').innerHTML = c;

//字符串、数字、布尔、数组、对象、Null、Undefined

var y=123e5;      // 12300000
var z=123e-5;     // 0.00123
document.getElementById('jis').innerHTML = y;

var cars = ["red","blue","white"];
var person = {
    firstname: "my",
    lastname : "studio"
};
name = person.lastname;

person = null;
console.log(u.length);

pro = new Object();
pro.color = "blue";
pro.width = "100";
pro.height = "50";

var message="Hello world!";
var messx = message.toUpperCase();
console.log(messx);

function myFunction() {
  alert("Hello World!");
}

function mydemo(one,two) {
    alert("welcome " + one + " " + two + " !");
    var x = 5;
    return x;
}

function andx(a,b) {
    return a*b;
}

document.getElementById('andx').innerHTML = andx(4,5);

// ------------------------------------------------------

var y = "5",x = 5,z = 11;
var w = y > z ? "hello" : "hell"
console.log(w);

var aa = "http://127.0.0.1:5500/project_1/";
var dd = window.location.href == aa ? getDate() : "no" ;
// console.log(dd);

function getDate(){
	var date = new Date();
    var year = date.getFullYear();    //  返回的是年份
    var month = date.getMonth() + 1;  //  返回的月份上个月的月份，记得+1才是当月
    var dates = date.getDate();       //  返回的是几号
    var day = date.getDay();          //  周一返回的是1，周六是6，但是周日是0
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var arr = [ "星期日","星期一","星期二","星期三","星期四","星期五","星期六",];
    document.getElementById("time").innerHTML =
      "今天是 " +
      year +
      " 年 " +
      month +
      " 月 " +
      dates +
      " 日 " +
      arr[day] +
      hours +
      " 时 " +
      minutes +
      " 分 " +
      seconds +
      " 秒 ";
}

// 引用02 http://caibaojian.com/javascript/12.html

