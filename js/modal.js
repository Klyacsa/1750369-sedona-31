const modalLink = document.querySelector(".modal-open-button");
const modalPopup = document.querySelector(".modal");
const modalForm = modalPopup.querySelector(".modal-form");
const formDate = modalPopup.querySelector(".form-date");
const formNumber = modalPopup.querySelector(".form-number");

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.toggle("modal-show");
  modalPopup.classList.toggle("modal");
});
