const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/authToken", apiController.authToken)

router.post("/createBasiqUser", apiController.createBasiqUser)

router.get("/createAuthLink", apiController.createAuthLink)

router.get("/getTransactions", apiController.getTransactions)

module.exports = router;