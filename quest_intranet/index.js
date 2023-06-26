// // JavaScript code to handle hover effect
window.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelectorAll("ul");
  ul.forEach((item) => {
    item.classList.add("display-none");
  });
});

function onhovering(e) {
  let ul = document.querySelectorAll("ul");
  ul.forEach((item) => {
    item.classList.add("display-none");
  });
  console.log("event ==>", e.target.className);
  let currentClass = e.target.className;

  let firstEle = document.querySelector(`.ul-${currentClass}`);
  firstEle.classList.remove("display-none");
  firstEle.classList.add("display");
}