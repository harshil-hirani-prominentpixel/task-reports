import { Router } from "express";
import {
  signupController,
  signinController,
  signoutController,
  addUserController,
} from "../controllers/userController";

const router = Router();

router.post("/signup", signupController);
router.post("/signin", signinController);
router.post("/signout", signoutController);
router.post("/admin/add-user", addUserController);

export default router;

