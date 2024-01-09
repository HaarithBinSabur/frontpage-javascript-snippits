//This is a like a pop up notifacation with an overlay
//The modal will pop open and you can close it with its close button

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("open-modal");
})