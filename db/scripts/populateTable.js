import { query } from "../index.js";
import { data } from "../../data.js";

const sqlString = `INSERT INTO games (title, playtime, liked, disliked) VALUES ($1, $2, $3, $4) RETURNING user`;

async function populateGamesTable() {
   for (let i = 0; i < data.length; i++) {
      console.log("this is the data", data);
      let { title, playtime, liked, disliked } = data[i];

      const res = await query(sqlString, [username, score]);
      console.log(res);
   }
}

populateGamesTable();
