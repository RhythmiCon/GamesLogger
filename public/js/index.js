const url = "localhost:3000";

const homeBtn = document.querySelector(".main__heading");
const newGameBtn = document.querySelector("#new__game");
const loadGameBtn = document.querySelector("#load__game");

homeBtn.addEventListener("click", () => {
   window.location.href = "/";
});

newGameBtn.addEventListener("click", () => {
   window.location.href = "/new.html";
});

loadGameBtn.addEventListener("click", () => {
   window.location.href = "/load.html";
});
