import bot from "./bot.js";

// Function to send message to user
async function sendMessageToUser(message, userId) {
  try {
    await bot.telegram.sendMessage(userId, message);
  } catch (err) {
    return new Error(`Error sending message to user ${userId}: ${err}`);
  }
}

export default sendMessageToUser;
