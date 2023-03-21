var min = 1;
var max=4;

var num1 =Math.floor((Math.random())*(max - min)+min);
var min1 = 4;
var max1 = 7;
	

var num2 = Math.floor((Math.random())*(max1 - min1)+min1);
var min3 = 7;
var max3 = 10;

var num3 = Math.floor((Math.random())*(max3 - min3)+min3);
var min4 = 10;
var max4 = 13;

var num4 = Math.floor((Math.random())*(max4 - min4)+min4);

/*----------------------------Validate Test #1-----------------------------------------*/

//validate radio button questions
function CheckRadio1() {
	if(1!=num1){
		return false ;
	}
	var radio1 = false;
	var x = document.testOne.essentialFind;
	for (var i = 0 ; i < x.length ; i++) {
		if (x[i].checked){
			radio1 = true;
			break; 
		}
	}
	if (radio1){
		return false;
	}
	else {
		alert("You didn't answer a radio button question");
	}
}

function CheckRadio2() {
	var a2 = document.getElementById("2");
	if(2!=num1){
		return false ;
	}
	var radio2 = false;
	var x = document.testOne.StartCar;
	for (var i = 0 ; i < x.length ; i++) {
		if (x[i].checked){
			radio2 = true;
			break; 
		}
	}
	if (radio2){
		return false;
	}
	else {
		alert("You didn't answer a radio button question");
	}
}

function CheckRadio3() {
	var a3 = document.getElementById("3");
	if(3!=num1){
		return false ;
	}
	var radio3 = false;
	var x = document.testOne.parallel;
	for (var i = 0 ; i < x.length ; i++) {
		if (x[i].checked){
			radio3 = true;
			break; 
		}
	}
	if (radio3){
		return false;
	}
	else {
		alert("You didn't answer radio button question");
	}
}

//validate dropdown questions
function CheckMenue1() {
	var a4 = document.getElementById("4");
	if(4!=num2){
		return false ;
	}
	var x = document.getElementById("select1").value;
	if (x == "1"){
		alert ("You didn't answer a dropdown question")
	return false;
	}
	return true;
}

function CheckMenue2() {
	var a5 = document.getElementById("5");
	if(5!=num2){
		return false ;
	}
	var x = document.getElementById("select2").value;
	if (x == "1"){
		alert ("You didn't answer a dropdown question")
	return false;
	}
	return true;
}

function CheckMenue3() {
	var a6 = document.getElementById("6");
	if(6!=num2){
		return false ;
	}
	var x = document.getElementById("select3").value;
	if (x == "1"){
		alert ("You didn't answer a dropdown question")
	return false;
	}
	return true;
}

//validate checkbox questions
function CheckBox1() {
	var a7 = document.getElementById("7");
	if(7!=num3 ){
		return false ;
	}
	var box = false;
	var x = document.testOne.HosesMade;
	for (var i = 0 ; i < x.length ; i++) {
		if (x[i].checked){
			box = true;
			break; 
		}
	}
	if (box){
		return false;
	}
	else {
		alert("You didn't answer a checkbox question");
	}
}

function CheckBox2() {
	var a8 = document.getElementById("8");
	if(8!=num3){
		return false ;
	}
	var box = false;
	var x = document.testOne.OilUsed;
	for (var i = 0 ; i < x.length ; i++) {
		if (x[i].checked){
			box = true;
			break; 
		}
	}
	if (box){
		return false;
	}
	else {
		alert("You didn't answer a checkbox question");
	}
}

function CheckBox3() {
	var a8 = document.getElementById("8");
	if(9!=num3){
		return false ;
	}
	var box = false;
	var x = document.testOne.RoadSigns;
	for (var i = 0 ; i < x.length ; i++) {
		if (x[i].checked){
			box = true;
			break; 
		}
	}
	if (box){
		return false;
	}
	else {
		alert("You didn't answer a checkbox question");
	}
}

//validate textbox questions
function CheckEmpty1() {
	if(10!=num4){
		return false ;
	}
 if(document.forms["testOne"].min.value === "" ) 
 {
    alert("You didn't answer a textbox question");
    document.getElementById("min").style.bordercolor="red";
    return false;
}
return true;
}
function CheckEmpty2() {
	if(11!=num4){
		return false ;
	}
 if(document.forms["testOne"].putCar.value === "" ) 
 {
    alert("You didn't answer a textbox question");
    document.getElementById("min").style.bordercolor="red";
    return false;
}
return true;
}

function CheckEmpty3() {
	if(12!=num4){
		return false ;
	}
 if( document.forms["testOne"].right.value === "") 
 {
    alert("You didn't answer a textbox question");
    document.getElementById("min").style.bordercolor="red";
    return false;
}
return true;
}


function Allfunctions(){
CheckRadio1();
CheckRadio2();
CheckRadio3();
CheckMenue1();
CheckMenue2();
CheckMenue3();
CheckBox1();
CheckBox2();
CheckBox3();
CheckEmpty1();
CheckEmpty2();
CheckEmpty3();
submittest1();
}

/*----------------------------Validate Test #2-----------------------------------------*/
function ImageCheckAndValdiation(){
	var num=0;
	if(1==num1){
		var id="";
		$("#d1").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check1")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag1"){
				num++;
				check1.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check1.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
			
	}
	if(2==num1){
				var id="";
		$("#d2").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check2")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag2"){
				num++;
				check2.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check2.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(3==num1){
				var id="";
		$("#d3").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check3")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag3"){
				num++;
				check3.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check3.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(4==num2){
				var id="";
		$("#d4").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check4")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag4"){
				num++;
				check4.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check4.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(5==num2){
				var id="";
		$("#d5").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check5")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag5"){
				num++;
				check5.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check5.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(6==num2){
				var id="";
		$("#d6").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check6")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag6"){
				num++;
				check6.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check6.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(7==num3){
				var id="";
		$("#d7").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check7")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag7"){
				num++;
				check7.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check7.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(8==num3){
				var id="";
		$("#d8").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check8")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag8"){
				num++;
				check8.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check8.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(9==num3){
				var id="";
		$("#d9").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check9")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag9"){
				num++;
				check9.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check9.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(10==num4){
				var id="";
		$("#d10").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check10")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag10"){
				num++;
				check10.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check10.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(11==num4){
				var id="";
		$("#d11").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check11")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag11"){
				num++;
				check11.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check11.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
	if(12==num4){
				var id="";
		$("#d12").children().each(function(n, i) {
			id = this.id;
			});
		if((id == "check12")){
			alert("You have to drag all the pictures")
			return false;
		}
		else{
			if(id=="drag12"){
				num++;
				check12.innerHTML = "<text>" + "✔"  +"</text>";
			}
			else{
				check12.innerHTML = "<text>" + "✖" +"  Correct Option "+"</text>";
			}
			
		}
	}
if(num==4)
{
alert("congradulations you have passed the test go to next test");
}
else{
alert("please correct all answers");
return false;
}
}

	var x=0;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	x++;
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


/*----------------------Validate Login & Register------------------------------*/

function CheckLogin() {
if (document.forms["LoginForm"].email.value === "" 
   || document.forms["LoginForm"].password.value === ""){
 alert("You didn't enter Email/Password");
    return false;
}
return true;
}

function CheckRegister() {
if (document.forms["RegisterForm"].userName.value === ""
   || document.forms["RegisterForm"].email.value === "" 
   || document.forms["RegisterForm"].password.value === ""){
 alert("You didn't enter Username/Email/Password");
    return false;
}
return true;
}

function CheckEmail() {
    var email = document.getElementById("email");
    var pattren = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!pattren.test(email.value)) {
    alert("Please Enter a valid email address");
    email.focus;
    return false;
 }
}
	
	
function RegisterValidation(){
CheckRegister();
CheckEmail();
}

function LoginValidation() {
CheckLogin();
CheckEmail();
}
	

/*----------------------------Random Test #1-----------------------------------------*/
function randomQuizTest1(){
	
  var a1 = document.getElementById("1");
  var a2 = document.getElementById("2");
  var a3 = document.getElementById("3");
  

  
  a1.style.display = "block";
  a2.style.display = "block";
  a3.style.display = "block";
  

  
  if ((a1.style.display === "none" || a1.style.display === "block") && num1==1  ) {
    a1.style.display = "block";
  } else {
    a1.style.display = "none";
  }
   if ((a2.style.display === "none" || a2.style.display === "block") && num1==2 ) {
    a2.style.display = "block";
  } else {
    a2.style.display = "none";
  }
  if ((a3.style.display === "none" || a3.style.display === "block") && num1==3 ) {
    a3.style.display = "block";
  } else {
    a3.style.display = "none";
  }
  
  
  var a4 = document.getElementById("4");
  var a5 = document.getElementById("5");
  var a6 = document.getElementById("6");
  a4.style.display = "block";
  a5.style.display = "block";
  a6.style.display = "block";
  if ((a4.style.display === "none" || a4.style.display === "block") && num2==4 ) {
    a4.style.display = "block";
  } else {
    a4.style.display = "none";
  }
   if ((a5.style.display === "none" || a5.style.display === "block")  && num2==5 ) {
    a5.style.display = "block";
  } else {
    a5.style.display = "none";
  }
  if ((a6.style.display === "none" || a6.style.display === "block") &&  num2==6) {
    a6.style.display = "block";
  } else {
    a6.style.display = "none";
  }
 
  
    
  var a7 = document.getElementById("7");
  var a8 = document.getElementById("8");
  var a9 = document.getElementById("9");
  a7.style.display = "block";
  a8.style.display = "block";
  a9.style.display = "block";
  if ((a7.style.display === "none" || a7.style.display === "block") && num3==7 ) {
    a7.style.display = "block";
  } else {
    a7.style.display = "none";
  }
   if ((a8.style.display === "none" || a8.style.display === "block")  && num3==8 ) {
    a8.style.display = "block";
  } else {
    a8.style.display = "none";
  }
  if ((a9.style.display === "none" || a9.style.display === "block") &&  num3==9 ) {
    a9.style.display = "block";
  } else {
    a9.style.display = "none";
  }
  

  var a10 = document.getElementById("10");
  var a11 = document.getElementById("11");
  var a12 = document.getElementById("12");
  a10.style.display = "block";
  a11.style.display = "block";
  a12.style.display = "block";
  if ((a10.style.display === "none" || a10.style.display === "block") && num4==10 ) {
    a10.style.display = "block";
  } else {
    a10.style.display = "none";
  }
   if ((a11.style.display === "none" || a11.style.display === "block")  && num4==11 ) {
    a11.style.display = "block";
  } else {
    a11.style.display = "none";
  }
  if ((a12.style.display === "none" || a12.style.display === "block") &&  num4==12 ) {
    a12.style.display = "block";
  } else {
    a12.style.display = "none";
  }
  
}

/*----------------------------Random Test #2-----------------------------------------*/


function randomQuizTest2(){
	
		
  var a1 = document.getElementById("div1");
  var a2 = document.getElementById("div2");
  var a3 = document.getElementById("div3");
  
  var d1 = document.getElementById("d1");
  var d2 = document.getElementById("d2");
  var d3 = document.getElementById("d3");
  
  a1.style.display = "block";
  a2.style.display = "block";
  a3.style.display = "block";
  
  d1.style.display = "block";
  d2.style.display = "block";
  d3.style.display = "block";
  
  if ((a1.style.display === "none" || a1.style.display === "block") && num1==1  ) {
    a1.style.display = "block";
	d1.style.display = "block";
  } else {
    a1.style.display = "none";
	d1.style.display = "none";
  }
   if ((a2.style.display === "none" || a2.style.display === "block") && num1==2 ) {
    a2.style.display = "block";
	d2.style.display = "block";
  } else {
    a2.style.display = "none";
	d2.style.display = "none";
  }
  if ((a3.style.display === "none" || a3.style.display === "block") && num1==3 ) {
    a3.style.display = "block";
	d3.style.display = "block";
  } else {
    a3.style.display = "none";
	d3.style.display = "none";
  }
  
  
  var a4 = document.getElementById("div4");
  var a5 = document.getElementById("div5");
  var a6 = document.getElementById("div6");
  
  var d4 = document.getElementById("d4");
  var d5 = document.getElementById("d5");
  var d6 = document.getElementById("d6");
  
  a4.style.display = "block";
  a5.style.display = "block";
  a6.style.display = "block";
  
  d4.style.display = "block";
  d5.style.display = "block";
  d6.style.display = "block";
  
  if ((a4.style.display === "none" || a4.style.display === "block") && num2==4 ) {
    a4.style.display = "block";
	d4.style.display = "block";
  } else {
    a4.style.display = "none";
	d4.style.display = "none";
  }
   if ((a5.style.display === "none" || a5.style.display === "block")  && num2==5 ) {
    a5.style.display = "block";
	d5.style.display = "block";
  } else {
    a5.style.display = "none";
	d5.style.display = "none";
  }
  if ((a6.style.display === "none" || a6.style.display === "block") &&  num2==6) {
    a6.style.display = "block";
	d6.style.display = "block";
  } else {
    a6.style.display = "none";
	d6.style.display = "none";
  }
 
  
    
  var a7 = document.getElementById("div7");
  var a8 = document.getElementById("div8");
  var a9 = document.getElementById("div9");
  
  var d7 = document.getElementById("d7");
  var d8 = document.getElementById("d8");
  var d9 = document.getElementById("d9");
  
  a7.style.display = "block";
  a8.style.display = "block";
  a9.style.display = "block";
  
  d7.style.display = "block";
  d8.style.display = "block";
  d9.style.display = "block";
  
  if ((a7.style.display === "none" || a7.style.display === "block") && num3==7 ) {
    a7.style.display = "block";
	d7.style.display = "block";

  } else {
    a7.style.display = "none";
	d7.style.display = "none";
  }
   if ((a8.style.display === "none" || a8.style.display === "block")  && num3==8 ) {
    a8.style.display = "block";
	d8.style.display = "block";
  } else {
    a8.style.display = "none";
	d8.style.display = "none";
  }
  if ((a9.style.display === "none" || a9.style.display === "block") &&  num3==9 ) {
    a9.style.display = "block";
	d9.style.display = "block";
  } else {
    a9.style.display = "none";
	d9.style.display = "none";
  }
  

  var a10 = document.getElementById("div10");
  var a11 = document.getElementById("div11");
  var a12 = document.getElementById("div12");
  
  var d10 = document.getElementById("d10");
  var d11 = document.getElementById("d11");
  var d12 = document.getElementById("d12");
  
  a10.style.display = "block";
  a11.style.display = "block";
  a12.style.display = "block";
  
  d10.style.display = "block";
  d11.style.display = "block";
  d12.style.display = "block";
  
  if ((a10.style.display === "none" || a10.style.display === "block") && num4==10 ) {
    a10.style.display = "block";
	d10.style.display = "block";
  } else {
    a10.style.display = "none";
	d10.style.display = "none";
  }
   if ((a11.style.display === "none" || a11.style.display === "block")  && num4==11 ) {
    a11.style.display = "block";
	d11.style.display = "block";
  } else {
    a11.style.display = "none";
	d11.style.display = "none";
  }
  if ((a12.style.display === "none" || a12.style.display === "block") &&  num4==12 ) {
    a12.style.display = "block";
	d12.style.display = "block";
  } else {
    a12.style.display = "none";
	d12.style.display = "none";
  }
}
/*----------------------------Correcting-----------------------------------------*/

function allowDrop(ev) {
  ev.preventDefault();
}
function submittest1() {
    //questions test one
		var result=0;
var t1q1a1 = document.getElementById("t1q1r1");
var t1q1a2 = document.getElementById("t1q1r2");
var t1q1a3 = document.getElementById("t1q1r3");
//Q1
if(1==num1){
if(t1q1a3.checked==true)
{
check001.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{
check001.innerHTML = "<text>" + "✖" +"  Correct Option= 3"+"</text>";

}	
}

var t1q2a1 = document.getElementById("t1q2r1");
var t1q2a2 = document.getElementById("t1q2r2");
var t1q2a3 = document.getElementById("t1q2r3");
//Q2
if(2==num1){
if(t1q2a3.checked==true)
{
check002.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{

check002.innerHTML = "<text>" + "✖" +"  Correct Option= 3"+"</text>";

}
}
var t1q3a1 = document.getElementById("t1q3a1");
var t1q3a2 = document.getElementById("t1q3a2");
var t1q3a3 = document.getElementById("t1q3a3");
//Q3

if(3==num1){
if(t1q3a2.checked==true)
{
check003.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{

check003.innerHTML = "<text>" + "✖" +"  Correct Option= 3"+"</text>";

}
}

//Q4
var t1q4aa = document.getElementById("t1q4").value;
if(4==num2){
if(t1q4aa==1)
{
check004.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{
check004.innerHTML = "<text>" + "✖" +"  Correct Option= 1"+"</text>";

}
}
//Q5
var t1q5aa = document.getElementById("t1q5").value;
if(5==num2){
if(t1q5aa==2)
{
check005.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{
check005.innerHTML = "<text>" + "✖" +"  Correct Option= 2"+"</text>";
}
}

//Q6
var t1q6aa = document.getElementById("t1q6").value;
if(6==num2){
if(t1q6aa==1)
{
check006.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{
check006.innerHTML = "<text>" + "✖" +"  Correct Option= 2"+"</text>";
}
}

//Q7
if(7==num3){
if(document.getElementById("t1q7o3").checked )
{
check007.innerHTML = "<text>" + "✖" +"  Correct Option= 2 only"+"</text>";


}else if(document.getElementById("t1q7o1").checked)
{
check007.innerHTML = "<text>" + "✖" +"  Correct Option= 2 only"+"</text>";

}else if(document.getElementById("t1q7o2").checked)
{

check007.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}
}

//Q8
if(8==num3){
if(document.getElementById("t1q8o3").checked)
{
check008.innerHTML = "<text>" + "✖" +"  Correct Option= 1 only"+"</text>";

}else if(document.getElementById("t1q8o2").checked)
{
check008.innerHTML = "<text>" + "✖" +"  Correct Option= 1 only"+"</text>";

}
else if(document.getElementById("t1q8o1").checked)
{

check008.innerHTML = "<text>" + "✔"  +"</text>";
result++;

}
}
//Q9
if(9==num3){
if(document.getElementById("t1q9o3").checked)
{
check009.innerHTML = "<text>" + "✖" +"  Correct Option= 1 only"+"</text>";
}
else if(document.getElementById("t1q9o2").checked)
{
check009.innerHTML = "<text>" + "✖" +"  Correct Option= 1 only"+"</text>";

}
else if(document.getElementById("t1q9o1").checked)
{

check009.innerHTML = "<text>" + "✔"  +"</text>";
result++;

}
}


//Q10
var t1q10aa = document.getElementById("min").value;

if(t1q10aa == "eliminate any obstacles")
{
check010.innerHTML = "<text>" + "✔"  +"</text>";
result++;

}else
{
check010.innerHTML = "<text>" + "✖" +"  Correct Option= eliminate any obstacles "+"</text>";

}

//Q11
var t1q11aa = document.getElementById("putCar").value;

if(t1q11aa == "drive")
{
check011.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{
check011.innerHTML = "<text>" + "✖" +"  Correct Option= drive "+"</text>";
}
//Q12
var t1q12aa = document.getElementById("right").value;

if(t1q12aa == "left")
{
check012.innerHTML = "<text>" + "✔"  +"</text>";
result++;
}else
{
check012.innerHTML = "<text>" + "✖" +"  Correct Option= left "+"</text>";
}

if(result==4)
{
alert("congradulations you have passed the test go to next test");
}
else{
alert("please correct all answers");
return false;
}
}


	