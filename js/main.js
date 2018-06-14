/* -- Version 1 -- */
var div = document.getElementById('container');
function bgChange(e) {
  var rndCol = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
  e.target.style.backgroundColor = rndCol;
}   

for ( var i = 0; i < 100; i++ ){
  var newDiv = document.createElement('div');
  newDiv.classList.add("cube");
  div.appendChild(newDiv);
  
}

div.addEventListener("mouseover", bgChange);
