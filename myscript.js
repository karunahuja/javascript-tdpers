var x;
alert(x);

var y=null;
alert(y);

var z=1.23432;
alert(z);

var a=Math.PI;
alert(a);

var b=["red","green","blue"];
alert(b);


var x={make:"Ford",model:"Focus",year:"2019"};
alert(x.year);

var c=0;
c+=1;
alert(c);

var x=10;
x++;
alert(x);

var x=25;
x=x%2;
alert(x);

var x="Hello";
x=x+"There";
alert(x);


var x=20;
if(x<=3){
    alert("true");
}
else{
    alert("False");
}

if(x==11||x==20){
    alert("true");
}
else{
    alert("False");
}
var x="";
for(var i=0;i<10;i++){
    if(i==5){
        break;
    }
    x+=i+" ";
     

}
alert(x);
i=0;
var x="";
while(i<100){
    if(i==5){
        i++;
        continue;
    }
    x+=i+" ";
    i++;
}
alert(x);


var x="How is ur finest hHour";
var y=x.substring(18,21);
alert(y);
var y=x.substr(18,4);
alert(y)


function myfunc1(){
alert("button1");
}
function myfunc2(){
alert("Button2");
}
function myfunc3(){
alert("Button3");
}



  