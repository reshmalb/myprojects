

const express = require("express");
const router = express.Router();
const { loginHandler, registerHandler} = require("../../controllers/admin/credential.controller");

router.post("/login", loginHandler);
router.post("/register",registerHandler);

module.exports = router;