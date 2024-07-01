import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  register,
} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.route("/").post(register).get(getAllUsers);
userRouter.route("/:id").get(getUserById);

export default userRouter;
