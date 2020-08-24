


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

  let num6=Math.random()*10;  //random betw 0 and 10
  let num7=Math.sqrt(49);
  let finCalc=new Finance();
  let num8=fincalc.FV(0.08,2000,36);

  var myMap=new Map();
  myMap.set('crystal','clear');
  myMap.set('8',null);
  myMap.set('seven',7);
  myMap.set(50,'cents');

  myMap.forEach(function(item,key,mapObj){
        p1.innerHTML+=key.toString()+"<br/>";
    });

let mySet=new Set();
mySet.add('monday').add(56).add(true).add(undefined);
p1.innerHTML+=mySet.size; 
for(let myKey of mySet){
    console.log(mykey);
}  
async function simpleF(){
    let promise=new Promise(function(resolve,reject){
      setTimeout(function(){resolve('Just executed');
    },2000);});
   // return Promise.resolve("Just executed");
   showMe(await promise);
}

simpleF();



//variable Hoisting
num1=6;
p1.innerHTML=`${num1}`;
var num1;

//function Hoisting , hoisting not possible in classes
p1.innerHTML=`${getNum()}`;
 
function getNum1(){
    return 6;
}


let x='123.45';
console.log(x.padStart(10,'+'));
y='123.45';
console.log(y.padEnd(10));
z='12345.67'
console.log(z.padEnd(10,'-'));


function myfunc3(){
alert("Button3");
}


//data types
let truth=true;
let employee=null;
let days=undefined;
let x=5;
let name='karun';
const COLOR='blue';

let year=date.getFullYear();
let sYear=year.toString();

let x=parseInt(sYear);

