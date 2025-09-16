import { Router } from "express";
import { verificationEmail } from "../controllers/email.controller.js";
import { gatewayAuth } from '../middlewares/gatewayAuth.js'

const router = Router();

router.post("/verification", gatewayAuth, verificationEmail);

export default router;
