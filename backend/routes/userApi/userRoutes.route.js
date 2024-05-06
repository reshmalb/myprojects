const express = require('express');
const router = express.Router();
const userController= require("../../controllers/user/user.controller")

router.get('/getuser',userController.GetUserData);
router.patch('/approvemember/:userId',userController.ApproveUser)

module.exports = router;
