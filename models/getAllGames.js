import { query } from "../db/index.js";

export async function getAllGames() {
   const data = await query("SELECT * FROM games");
   return data.rows;
}
