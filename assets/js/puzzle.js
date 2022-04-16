"use strict"

//load magic square array
var grid = [6,11,1,16,4,13,7,10,15,2,12,5,9,8,14,3];
var cells = grid.toString();
console.log(cells);

//separate into readable chunks 4 digits each
//var firstLine = grid[0] + " " + grid[1] + " " + grid[2] + " " + grid[3];
//var secondLine = grid[4] + " " + grid[5] + " " + grid[6] + " " + grid[7];
//var thirdLine = grid[8] + " " + grid[9] + " " + grid[10] + " " + grid[11];
//var fourthLine = grid[12] + " " + grid[13] + " " + grid[14] + " " + grid[15];

//print the array
document.getElementById("first").innerHTML = "This was a magic square until I plucked four numbers";  
document.getElementById("second").innerHTML = "Can you restore it to magic squareness?";  
//document.getElementById("third").innerHTML = thirdLine;  
//document.getElementById("fourth").innerHTML = fourthLine;  
 
//declare variables necessary to determine deleted positions
var taken = [1,2,3,4];
var pass = 0;

//determine where the array taken -- one cell to be taken from each row
while(pass == 0) {
shuffle(taken);
pass = 1;
//console.log(taken);
if(taken == "1,2,3,4") {pass = 0;}
if(taken == "4,3,2,1") {pass = 0;}
}
console.log(taken);


var r1dc = taken[0];
var r2dc = taken[1];
var r3dc = taken[2];
var r4dc = taken[3];

//print out the cells not taken

//row 1
if(r1dc != 1){
document.getElementById("r1c1").value = grid[0];  
document.getElementById("r1c1").disabled = true;
document.getElementById("r1c1").style.color = "red";
}
if(r1dc != 2){
document.getElementById("r1c2").value = grid[1];  
document.getElementById("r1c2").disabled = true;
document.getElementById("r1c2").style.color = "red";
}
if(r1dc != 3){
document.getElementById("r1c3").value = grid[2];  
document.getElementById("r1c3").disabled = true;
document.getElementById("r1c3").style.color = "red";
}
if(r1dc != 4){
document.getElementById("r1c4").value = grid[3];  
document.getElementById("r1c4").disabled = true;
document.getElementById("r1c4").style.color = "red";
}

//row 2
if(r2dc != 1){
document.getElementById("r2c1").value = grid[4];  
document.getElementById("r2c1").disabled = true;
document.getElementById("r2c1").style.color = "red";
}
if(r2dc != 2){
document.getElementById("r2c2").value = grid[5];  
document.getElementById("r2c2").disabled = true;
document.getElementById("r2c2").style.color = "red";
}
if(r2dc != 3){
document.getElementById("r2c3").value = grid[6];  
document.getElementById("r2c3").disabled = true;
document.getElementById("r2c3").style.color = "red";
}
if(r2dc != 4){
document.getElementById("r2c4").value = grid[7];  
document.getElementById("r2c4").disabled = true;
document.getElementById("r2c4").style.color = "red";
}

//row 3
if(r3dc != 1){
document.getElementById("r3c1").value = grid[8];  
document.getElementById("r3c1").disabled = true;
document.getElementById("r3c1").style.color = "red";
}
if(r3dc != 2){
document.getElementById("r3c2").value = grid[9];  
document.getElementById("r3c2").disabled = true;
document.getElementById("r3c2").style.color = "red";
}
if(r3dc != 3){
document.getElementById("r3c3").value = grid[10];  
document.getElementById("r3c3").disabled = true;
document.getElementById("r3c3").style.color = "red";
}
if(r3dc != 4){
document.getElementById("r3c4").value = grid[11];  
document.getElementById("r3c4").disabled = true;
document.getElementById("r3c4").style.color = "red";
}

//row 4
if(r4dc != 1){
document.getElementById("r4c1").value = grid[12];  
document.getElementById("r4c1").disabled = true;
document.getElementById("r4c1").style.color = "red";
}
if(r4dc != 2){
document.getElementById("r4c2").value = grid[13];  
document.getElementById("r4c2").disabled = true;
document.getElementById("r4c2").style.color = "red";
}
if(r4dc != 3){
document.getElementById("r4c3").value = grid[14];  
document.getElementById("r4c3").disabled = true;
document.getElementById("r4c3").style.color = "red";
}
if(r4dc != 4){
document.getElementById("r4c4").value = grid[15];  
document.getElementById("r4c4").disabled = true;
document.getElementById("r4c4").style.color = "red";
}



function check() {

let one = document.getElementById("r1c1").value;
let r1c1 = parseInt(one);
let two = document.getElementById("r1c2").value;
let r1c2 = parseInt(two);
let three = document.getElementById("r1c3").value;
let r1c3 = parseInt(three);
let four = document.getElementById("r1c4").value;
let r1c4 = parseInt(four);
let five = document.getElementById("r2c1").value;
let r2c1 = parseInt(five);
let six = document.getElementById("r2c2").value;
let r2c2 = parseInt(six);
let seven = document.getElementById("r2c3").value;
let r2c3 = parseInt(seven);
let eight = document.getElementById("r2c4").value;
let r2c4 = parseInt(eight);
let nine = document.getElementById("r3c1").value;
let r3c1 = parseInt(nine);
let ten = document.getElementById("r3c2").value;
let r3c2 = parseInt(ten);
let eleven = document.getElementById("r3c3").value;
let r3c3 = parseInt(eleven);
let twelve = document.getElementById("r3c4").value;
let r3c4 = parseInt(twelve);
let thirteen = document.getElementById("r4c1").value;
let r4c1 = parseInt(thirteen);
let fourteen = document.getElementById("r4c2").value;
let r4c2 = parseInt(fourteen);
let fifteen = document.getElementById("r4c3").value;
let r4c3 = parseInt(fifteen);
let sixteen = document.getElementById("r4c4").value;
let r4c4 = parseInt(sixteen);
var output = "";
var sum = r1c1+r1c2+r1c3+r1c4;
let tot5=r4c1+r3c2+r2c3+r1c4;
document.getElementById("tot5").innerHTML = tot5;  
let tot6=r1c1+r1c2+r1c3+r1c4;
document.getElementById("tot6").innerHTML = tot6;  
let tot7=r2c1+r2c2+r2c3+r2c4;
document.getElementById("tot7").innerHTML = tot7;  
let tot8=r3c1+r3c2+r3c3+r3c4;
document.getElementById("tot8").innerHTML = tot8;  
let tot9=r4c1+r4c2+r4c3+r4c4;
document.getElementById("tot9").innerHTML = tot9;  
let tot0=r1c1+r2c1+r3c1+r4c1;
document.getElementById("tot0").innerHTML = tot0;  
let tot1=r1c2+r2c2+r3c2+r4c2;
document.getElementById("tot1").innerHTML = tot1;  
let tot2=r1c3+r2c3+r3c3+r4c3;
document.getElementById("tot2").innerHTML = tot2;  
let tot3=r1c4+r2c4+r3c4+r4c4;
document.getElementById("tot3").innerHTML = tot3;  
let tot4=r1c1+r2c2+r3c3+r4c4;
document.getElementById("tot4").innerHTML = tot4;  

if (tot0==tot1&&tot1==tot2&&tot1==tot3&&tot1==tot4&&tot1==tot5&&tot1==tot6&&tot1==tot7&&tot1==tot8&&tot1==tot9) {
  output = `<h2><b>Magic Square! The sum is ${sum}.</b></h2>`;
} else {
  output = `<h2><b>This is not a magic square</b></h2>`;
}; 
document.getElementById("demo").innerHTML = output;  
};

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
 xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
  }

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}