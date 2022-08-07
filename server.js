import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

/* Getting the token from the .env file. */
const token = process.env.TOKEN;

/* Creating a new instance of the TelegramBot class. */
const bot = new TelegramBot(token, { polling: true });

/* A listener for the /bookmark command. */
bot.onText(/\/bookmark/, (msg, match) => {
  /* Getting the chat id of the user. */
  const chatId = msg.chat.id;

  /* Splitting the input string into an array of strings. */
  const url = match.input.split(" ")[1];

  /* Checking if the user has provided a URL. If not, it will send a message to the user asking for a
    URL. */
  if (url === undefined) {
    bot.sendMessage(chatId, "Please provide URL of article!");
    return;
  }
  //   URL.push(url);
  /* Sending a message to the user that the URL has been successfully saved. */
  bot.sendMessage(chatId, "URL has been successfully saved!");
  console.log(chatId);
});

/* A listener for the /keyboard command. */
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

bot.onText(/напомни/, function (msg, match) {
  var userId = msg.from.id;
  bot.sendMessage(userId, "Отлично! Я обязательно напомню, если не сдохну :)");
});

// bot.on('message', (msg) => {
//     const { chat: {id}} = msg;
//     bot.sendMessage(id, 'Pong')
// })

bot.onText(/\/help (.+)/, (msg, [source, match]) => {
  const {
    chat: { id },
  } = msg;
  bot.sendMessage(id, match);
});

bot.on("message", (msg) => {
  let Hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
  }

  let bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  }

  let robot = "I'm robot";
  if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
  }
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]],
      resize_keyboard: true,
      one_time_keyboard: true,
      force_reply: true,
    },
  });
});

bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://www.somesite.com/image.jpg");
});

bot.on("message", (msg) => {
  let location = "location";
  if (msg.text.indexOf(location) === 0) {
    bot.sendLocation(msg.chat.id, 48.2333, 38.2114);
    bot.sendMessage(msg.chat.id, "Here is the point");
  }
});

bot.on("message", (msg) => {
  let bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name);
  }
});

bot.on("message", (msg) => {
  let what = "rbt";

  if (msg.text.toString().toLowerCase().includes(what)) {
    try {
      bot.sendMessage(msg.chat.id, `RBT`);
      bot.kickChatMember(msg.chat.id, msg.from.id);
    } catch (err) {
      console.log(`[!] ERROR: !:RFD:S!!!!!!!!!!!!!!!! ${err}`);
      // bot.sendMessage(msg.chat.id, `Error: ${err}`);
    }
  }
});
