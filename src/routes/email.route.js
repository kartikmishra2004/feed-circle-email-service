import { Router } from "express";
import { verificationEmail } from "../controllers/email.controller.js";

const router = Router();

router.post("/verification", verificationEmail);

export default router;
