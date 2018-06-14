/** ------------ Version 2 ------------ */
const div = document.getElementById("container");
const tecniColor = (function tecniColor() {
  const fragment = document.createDocumentFragment();
  let element;
  const divs = 90;
  const createDivs = param => {
    for (let i = 0; i < param; i += 1) {
      element = document.createElement("div");
      element.classList.add("cube");
      fragment.appendChild(element);
    }
    div.appendChild(fragment);
  };

  const bgChange = e => {
    e.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 255
    )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`;
  };

  createDivs(divs);
  return {
    div,
    bgChange
  };
})();

div.addEventListener("mouseover", tecniColor.bgChange);
