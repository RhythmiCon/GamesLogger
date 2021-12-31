import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS games (id SERIAL PRIMARY KEY, title TEXT, playtime INT, liked SET, disliked SET) `;

async function createGamesTable() {
   const res = await query(sqlString);
   console.log("Table created", res);
}

createGamesTable();
