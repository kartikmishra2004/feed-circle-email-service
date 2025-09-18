import { Router } from "express";
import {
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail,
  verificationEmail,
} from "../controllers/email.controller.js";
import { gatewayAuth } from "../middlewares/gatewayAuth.js";

const router = Router();

router.post("/verification", gatewayAuth, verificationEmail);
router.post("/reset-password", gatewayAuth, sendPasswordResetEmail);
router.post("/reset-password-success", gatewayAuth, sendPasswordResetSuccessEmail);

export default router;
