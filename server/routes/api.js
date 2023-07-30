const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");

router.get("/authToken", apiController.authToken)
router.get("/createBasiqUser", apiController.createBasiqUser)
router.get("/getBasiqUser", apiController.getBasiqUser)
router.get("/createAuthLink", apiController.createAuthLink)

router.get("/getAccounts", apiController.getAccounts)
router.get("/getTransactions", apiController.getTransactions)

module.exports = router;