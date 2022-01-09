const url = "localhost:3000";

const homeBtn = document.querySelector(".main__heading");

homeBtn.addEventListener("click", () => {
   window.location.href = "/";
});

let submitBtn = document.querySelector("#add__btn");
submitBtn.addEventListener("click", addNewGame);

async function addNewGame() {
   const titleInput = document.querySelector("#game__title");
   const playtimeInput = document.querySelector("#game__playtime");
   const ratingBoxes = document.querySelector(".rating:checked");
   const commentBox = document.querySelector("#comment");

   const title = titleInput.value;
   const playtime = Number(playtimeInput.value);

   if (document.querySelector(".rating:checked") === null) {
      var rating = null;
   } else {
      var rating = Number(ratingBoxes.value);
   }

   const comment = commentBox.value;

   if (
      title !== "" &&
      playtime !== null &&
      ratingBoxes !== null &&
      comment !== ""
   ) {
      const response = await fetch(`/games`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            title: title,
            playtime: playtime,
            rating: rating,
            comment: comment,
         }),
      });

      titleInput.value = "";
      playtimeInput.value = "";
      commentBox.value = "";
      ratingBoxes.checked = false;

      submitBtn.style.transition = "0.5s";
      submitBtn.innerHTML = "Game added!";
      submitBtn.style.backgroundColor = "rgb(15, 228, 15)";
      setInterval(buttonTimeout, 2300);
   } else {
      submitBtn.style.transition = "0.5s";
      submitBtn.innerHTML = "Please add data.";
      submitBtn.style.backgroundColor = "red";
      setInterval(buttonTimeout, 2300);
   }
}

function buttonTimeout() {
   submitBtn.innerHTML = "Add to GamesLogger!";
   submitBtn.style.backgroundColor = "orange";
}
