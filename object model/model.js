

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-color");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  document.body.classList.add("modal-open");
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  document.body.classList.remove("modal-open");
  modal.classList.remove("open-modal");
});
