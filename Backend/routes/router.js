import express from "express";
const router = express.Router();

// Import routes
import subscribeRouter from "./subscribe.js";

// Use routes
router.use("/subscribe", subscribeRouter);

export default router;
