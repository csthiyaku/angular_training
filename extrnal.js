/*function one()
{
    alert("work done");
}*/
function callme()
{
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    c=a+b;
    document.getElementById("x").innerHTML="total:  "+c;
}
function clr()
{
    document.getElementById("x").innerHTML="";
    document.getElementById("a").value="";
    document.getElementById("b").value="";
}
/*
onerror=handleErr;
var txt="";

function handleErr(msg,url,i)
{
    txt+= "Error : " + msg + "\n";
    txt+= "url :" +url + "\n";
    txt+= "i :" +i + "\n";
    alert(txt);
    return true;
}*/

function tku()
{
    a=Number(document.getElementById("a").value);
    b=Number(document.getElementById("b").value);
    c=a-b;
    document.getElementById("x").innerHTML="sub: "+c;
}
var m1=98;m2=91;m3=86;
var total=m1+m2+m3;
var avg=total/3;
console.log("Total :"+total);
console.log("Average :" +avg);

if(m1>35&&m2>35&&m3>35)
{
    console.log("result pass");
      
     if(avg>90&&avg<100)
     {
         console.log("grade a")
     }
     else if(avg>80&&avg<89)
     {
         console.log("grade b");
     }
     else if(avg>35&&avg<79)
     {
         console.log("grade c");
     }
}
else{
    console.log("result fail");
    console.log("no grade")
}

var z='a';
switch(z)
{
    case 'a':
        console.log("vowals");
    break;
    
    default:
        console.log("invalied");
        break;
}

var a=1
switch(a)
{
    case 1:
        console.log("one");
    break;
    default:
        console.log("not a one");
}

var i=1;
while (i<3) {
    console.log("i value is" +i);
    i++;
}

var v=5;
for(v<1;v<10;v++)
{
    console.log("for i value" +v);
}