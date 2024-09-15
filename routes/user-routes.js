const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/user-controller");

const { userAuthVerification } = require("../middleware/auth-middleware");

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/auth", userAuthVerification);

userRouter.post("/logout", logoutUser);

module.exports = userRouter;
