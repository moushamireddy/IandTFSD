function Add(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    var s=parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+s;
}
function Sub(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    var d =parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+d;
}
function Mul(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    var p =parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+p;
}
function Div(){
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    var q =parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML="Result:"+q;
}
function Reset() {
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result").innerHTML="";
}