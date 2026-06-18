import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import { rateLimiter } from "../middlewares/rateLimiter.js";

const router = new Router();

router.post("/register", rateLimiter, AuthController.register);
router.post("/login", rateLimiter, AuthController.login);

export default router;