// route to store all newsletter subscribers

import express from "express";
import Subscribe from "../models/subscriber.model.js";
import sendMail from "../utils/sendMail.js";
const router = express.Router();
import newsletter from "../email templates/newsletter.js";
import newsletterUser from "../email templates/newsletterUser.js";

router.post("/", async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required!" });
    }
    const existingSubscriber = await Subscribe.findOne({ email });
    if (name && existingSubscriber) {
      if (!existingSubscriber.name) {
        existingSubscriber.name = name;
        await existingSubscriber.save();
        return res.status(200).json({ message: "Name updated successfully!" });
      } else {
        return res.status(400).json({ message: "Email already exists!" });
      }
    } else if (existingSubscriber) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const newSubscriber = new Subscribe({ email });
    await newSubscriber.save();
    if (name) {
      await sendMail(email, "Welcome to Get Notify!", newsletterUser(name));
    } else {
      await sendMail(email, "Welcome to Get Notify!", newsletter());
    }
    res.status(201).json({ message: "Subscriber added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

export default router;
