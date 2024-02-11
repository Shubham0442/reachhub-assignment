const { Router } = require("express");
const { Player } = require("../Models/players.model");
require("dotenv").config();
const { authentication } = require("../Middlewares/authentication");

const playerController = Router();

playerController.get("/top-players", authentication, async (req, res) => {
  try {
    const players = await Player.find();
    if (players?.length === 0) {
      res.status(404).send({ success: false });
    }
    res.status(201).send({ success: true, players });
  } catch (error) {
    res.status(404).send({ success: false });
  }
});

module.exports = { playerController };
