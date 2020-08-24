


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
alert(y);



function doit(chClass){


}

function myfunc1(){
alert("button1");
}
function demo(x){

    let ss=x.toString().substring(2,5).replace('','powered');

    let found=ss.search(/w/);
    if(found!=-1){
        
        document.getElementById("p1").innerHTML=`This is ${(x).toString().toUpperCase()}, the length is ${(x.length).toString().bold()}`;

    }
    else{
        return;

    }

  }

  let found1=ss.match(/y/);

  
  document.getElementById("p1").innerHTML=found1.index;

  document.getElementById("p1").innerHTML=found1.length;

  let found2=ss.match(/y/ig); //i for uppercase or lowercase and g for all occurances 

  let searchTerm=/by/;
  let found3=searchTerm.test(ss); //will return true or false

  let found4=searchTerm.exec(ss); //will return actual word


  let num1=0b101;
  let num2=47e2;
  let num4='8.56';
  let num3=Number.MAX_VALUE;
  let num5=Number.parseInt(num4);
  


function myfunc3(){
alert("Button3");
}



  