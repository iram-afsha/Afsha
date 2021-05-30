
var a = prompt('enter the first variable:');
var b = prompt('enter the second variable:');

function setup(){

  var b2 = createButton("click here to swap");
      b2.mousePressed(swap);
}

function draw(){


}

function swap(){

  [a,b] =[b,a];

  console.log("value after a afyer swapping", +a);
  console.log("value after b afyer swapping", +b);
}