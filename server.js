import "dotenv/config";

import TelegramBot from "node-telegram-bot-api";

const token = process.env.TOKEN;

// console.log(TOKEN)

const bot = new TelegramBot(token, {
  polling: true,
});

bot.onText(/\/bookmark/, (msg, match) => {
  const chatId = msg.chat.id;
  const url = match.input.split(" ")[1];

  if (url === undefined) {
    bot.sendMessage(chatId, "Please provide URL of article!");
    return;
  }

//   URL.push(url);
  bot.sendMessage(chatId, "URL has been successfully saved!");
});

bot.onText(/\/keyboard/, (msg) => {
  bot.sendMessage(msg.chat.id, "Alternative keybaord layout", {
    reply_markup: {
      keyboard: [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true,
    },
  });
});

// Listener (handler) for telegram's /label event
bot.onText(/\/label/, (msg, match) => {
  const chatId = msg.chat.id;
  const url = match.input.split(" ")[1];

  if (url === undefined) {
    bot.sendMessage(chatId, "Please provide URL of article!");
    return;
  }

  tempSiteURL = url;
  bot.sendMessage(chatId, "URL has been successfully saved!", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Development",
            callback_data: "development",
          },
          {
            text: "Lifestyle",
            callback_data: "lifestyle",
          },
          {
            text: "Other",
            callback_data: "other",
          },
        ],
      ],
    },
  });
});
