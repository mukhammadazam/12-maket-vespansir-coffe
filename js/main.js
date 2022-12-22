var burgerBtn = document.querySelector(".burger");
var modalRemoveBtn = document.querySelector(".modal__remove-btn");
var modal = document.querySelector(".modal");

burgerBtn.addEventListener("click", function() {
    modal.classList.add("modal-show")
})
modalRemoveBtn.addEventListener("click", function() {
    modal.classList.remove("modal-show")
})