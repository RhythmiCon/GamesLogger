import express from "express";
import { addGame } from "../models/addGame.js";
import { getAllGames } from "../models/getAllGames.js";
const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
   const response = await getAllGames();
   res.json({
      success: true,
      payload: response,
   });
});

router.post("/", async function ({ body }, res, next) {
   const { title, playtime, rating, comment } = body;
   const response = await addGame(title, playtime, rating, comment);

   res.json({
      success: true,
   });
});

export default router;
