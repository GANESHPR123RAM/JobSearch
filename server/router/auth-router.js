const express = require("express");
const router = express.Router();
const authControllers = require("../Controllers/auth-controller");
const validate = require("../middlewares/validator-middleware");
const { signupSchema, loginSchema } = require("../validators/auth-validator");

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);





module.exports=router;