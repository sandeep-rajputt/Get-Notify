import express from "express";
const router = express.Router();

// Import routes
import subscribeRouter from "./subscribe.js";
import contactUsRouter from "./contactUs.js";

// Use routes
router.use("/subscribe", subscribeRouter);
router.use("/contactUs", contactUsRouter);

export default router;
