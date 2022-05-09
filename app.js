const inpEl = document.getElementById("inp-el");
const addBtn = document.getElementById("add-btn");
const ulEl = document.getElementById("ul-el");
const titleName = document.getElementById("title-name");

// Get name of user for changing the name
const firstName = prompt(
  `Hi Dear user! Kindly Enter Your First name`
).toUpperCase();
titleName.textContent = `${firstName}'s TO DO List`;

const addList = function () {
  const divEl = document.createElement("div");
  divEl.classList.add("item");
  const liEl = document.createElement("li");
  liEl.textContent = `${inpEl.value}`;
  const checkIcon = document.createElement("button");
  checkIcon.setAttribute("class", "check-btn");
  checkIcon.innerHTML = `<i class="fas fa-check-square">`;
  const trashIcon = document.createElement("button");
  trashIcon.setAttribute("class", "trash-btn");
  trashIcon.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  divEl.append(liEl);
  divEl.append(checkIcon);
  divEl.append(trashIcon);
  ulEl.append(divEl);
  // clean the input
  inpEl.value = "";
};
// add btn functionality
addBtn.addEventListener("click", addList);

// check functionality
ulEl.addEventListener("click", function (e) {
  const item = e.target;
  const parentItem = item.parentElement;
  if (item.classList.contains("check-btn")) {
    parentItem.classList.toggle("checked-item");
  }

  if (item.classList.contains("trash-btn")) {
    parentItem.classList.add("remove-class");
    parentItem.addEventListener("transitionend", function () {
      parentItem.remove();
    });
  }
});

document.addEventListener("keydown", function (eve) {
  if (eve.key === "Enter") {
    addList();
  }
});
