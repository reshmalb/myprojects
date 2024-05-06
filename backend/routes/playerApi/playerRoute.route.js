const express = require('express');
const router = express.Router();
const upload = require("../../middlewares/uploadMiddleware");
const playerController = require("../../controllers/player/player.controller")

router.post('/addplayer',upload.single('image'),playerController.InsertPlayerData);
router.get('/getplayer',playerController.GetPlayerData)

module.exports = router;
