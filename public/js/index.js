const homeBtn = document.querySelector(".main__heading");
const newGameBtn = document.querySelector("#new__game");
const loadGameBtn = document.querySelector("#load__game");

homeBtn.addEventListener("click", () => {
   window.location.href = "../../public/index.html";
});

newGameBtn.addEventListener("click", () => {
   window.location.href = "../../public/new.html";
});

loadGameBtn.addEventListener("click", () => {
   window.location.href = "../../public/load.html";
});
