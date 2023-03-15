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
// 引用 http://caibaojian.com/javascript/9.html

