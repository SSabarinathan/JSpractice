const mouseTarget = document.querySelector("#mousePointer");

const unorderList = document.querySelector("#unorderedList");

let mousein = 0;

let mouseout = 0;

mouseTarget.addEventListener("mouseenter", () => {
  mousein++;
  mouseTarget.style.border = "6px dotted green";
  countin = document.createElement("li");
  countin.textContent = `Mouse Enter Count: ${mousein}`;
  unorderList.appendChild(countin);
});


mouseTarget.addEventListener("mouseleave", () => {
  mouseout++;
  mouseTarget.style.border = "2px solid black";
  countout = document.createElement("li"); // create list
  countout.textContent = `Mouse Leave Count: ${mouseout}`; // adding count inside list
  unorderList.appendChild(countout); // append list count inside ul
});
