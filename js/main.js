const div = document.getElementById('container');
let bgChange = function() {
  let fragment = document.createDocumentFragment(),
  element = undefined,
  divs = 100;

  let createDivs = (param) => {
    for (let i = 0; i < param; i++ ){
      element = document.createElement('div');
      element.classList.add("cube");
      fragment.appendChild(element); 
    }
    div.appendChild(fragment);
  };

  let bgChange = (e) => {
    e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`;
  };
  createDivs(100);
  
  return {
    div : div,
    bgChange: bgChange
  }
}();

div.addEventListener("mouseover", bgChange.bgChange);

/*           -- version inicial --

var div = document.getElementById('container');
function bgChange(e) {
  var rndCol = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
  e.target.style.backgroundColor = rndCol;
}   

for ( var i = 0; i < 99; i++ ){
  var newDiv = document.createElement('div');
  newDiv.classList.add("cube");
  div.appendChild(newDiv);
  
}

div.addEventListener("mouseover", bgChange);

*/

