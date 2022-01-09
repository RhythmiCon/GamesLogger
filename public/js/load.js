const homeBtn = document.querySelector(".main__heading");
const gamesSection = document.querySelector("#display__area");

homeBtn.addEventListener("click", () => {
   window.location.href = "/";
});

async function getGames() {
   const response = await fetch("/games");
   const { payload } = await response.json();
   gamesSection.innerHTML = "";
   payload.forEach(renderGames);
}

function renderGames(game) {
   const article = createGamesView(game);
   gamesSection.appendChild(article);
}

function createGamesView({ id, title, playtime, rating, comment }) {
   const article = document.createElement("article");
   article.setAttribute("id", "article");

   // const fileHeading = document.createElement("h4");
   // fileHeading.setAttribute("id", "file__heading");
   // fileHeading.innerText = "File No.:";
   const fileNumber = document.createElement("p");
   fileNumber.setAttribute("id", "file__number");
   fileNumber.innerText = id;

   // const titleHeading = document.createElement("h4");
   // titleHeading.setAttribute("id", "title__heading");
   // titleHeading.innerText = "Title";
   const gameTitle = document.createElement("p");
   gameTitle.setAttribute("id", "game__title");
   gameTitle.innerText = title;

   // const playtimeHeading = document.createElement("h4");
   // playtimeHeading.setAttribute("id", "playtime__heading");
   // playtimeHeading.innerText = "Hours played:";
   const playtimeDisplay = document.createElement("p");
   playtimeDisplay.setAttribute("id", "playtime__display");
   playtimeDisplay.innerText = playtime;

   // const ratingHeading = document.createElement("h4");
   // ratingHeading.setAttribute("id", "rating__heading");
   // ratingHeading.innerText = "Rating:";
   const ratingDisplay = document.createElement("p");
   ratingDisplay.setAttribute("id", "rating__display");
   ratingDisplay.innerText = rating;

   // const commentHeading = document.createElement("h4");
   // commentHeading.setAttribute("id", "comment__heading");
   // commentHeading.innerText = "Comments:";
   const commentDisplay = document.createElement("p");
   commentDisplay.setAttribute("id", "comment__display");
   commentDisplay.innerText = comment;

   // article.appendChild(fileHeading);
   article.appendChild(fileNumber);
   // article.appendChild(titleHeading);
   article.appendChild(gameTitle);
   // article.appendChild(playtimeHe/ading);
   article.appendChild(playtimeDisplay);
   // article.appendChild(ratingHeading);
   article.appendChild(ratingDisplay);
   // article.appendChild(commentHeading);
   article.appendChild(commentDisplay);
   return article;
}

getGames();
