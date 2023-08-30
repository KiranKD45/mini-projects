var addBtn = document.querySelector(".add");
var statusBtn = document.querySelector(".status");
var flag = 1;

addBtn.addEventListener("click", () => {
  if (flag == 1) {
    statusBtn.innerHTML = "Freind";
    statusBtn.style.color = "green";
    addBtn.innerHTML = "Remove";
    flag = 0;
  } else {
    statusBtn.innerHTML = "Stranger";
    statusBtn.style.color = "red";
    addBtn.innerHTML = "Add Freind";
    flag = 1;
  }
});

removeBtn.addEventListener("click", () => {});
