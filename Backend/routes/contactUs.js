// route to send contact us message to admin on telegram

import sendMessageToUser from "../Bots/Telegram/sendMessageToUser.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message, subject, website } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    const telegramMessage = `
        New contact us message from:\n
*Name*: ${name}
*Subject*: ${subject}
*Website*: ${website}
*Email*: ${email}
*Message*: ${message}
    `;
    await sendMessageToUser(telegramMessage, process.env.ADMIN_TELEGRAM_ID);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
