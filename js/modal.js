const modalLink = document.querySelector(".modal-open-button");
const modalPopup = document.querySelector(".modal");

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.add("modal-show");
});
