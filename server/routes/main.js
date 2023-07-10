const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth } = require("../middleware/auth");

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, homeController.getProfile);

//Routes for user login/signup
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.post("/authFlow", authController.authFlow)

router.get("/authToken", authController.authToken)

router.get("/createBasiqUser", authController.createBasiqUser)
router.get("/getBasiqUser", authController.getBasiqUser)

// router.get("/getConsents", authController.getConsents)

router.get("/createAuthLink", authController.createAuthLink)


router.get("/getAccounts", authController.getAccounts)

router.get("/getTransactions", authController.getTransactions)

module.exports = router;
