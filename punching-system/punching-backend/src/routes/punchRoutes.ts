import { Router } from "express";
import { punch } from "../controllers/punchController";
import { registerUser } from "../controllers/userController";

const router = Router();

router.post("/register", registerUser);
router.post("/punch", punch); 



export default router;
