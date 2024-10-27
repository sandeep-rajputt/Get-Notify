import bot from "./bot.js";

// Function to send message to user
async function sendMessageToUser(message, userId) {
  await bot.telegram
    .sendMessage(userId, message)
    .then(() => {
      return;
    })
    .catch((err) => {
      throw new Error("Error sending message");
    });
}

export default sendMessageToUser;
