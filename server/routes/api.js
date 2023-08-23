const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/authToken", apiController.authToken)

router.get("/createBasiqUser", apiController.createBasiqUser)

router.get("/createAuthLink", apiController.createAuthLink)

// router.get("/getBasiqUser", apiController.getBasiqUser)

router.get("/getTransactions", apiController.getTransactions)

module.exports = router;