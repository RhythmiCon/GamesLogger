import express from "express";
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

router.post("/", function (req, res, next) {});

export default router;
