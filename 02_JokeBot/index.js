const TelegramBot = require('node-telegram-bot-api');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

// console.log(process.env.TELEGRAM_TOKEN);
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// EventDriven
bot.on('message', (option) => {
    console.log("Message received on the bot", option);
    const msg = option.text.toLowerCase();
    if(msg === 'hello' || msg === 'hi') {
        bot.sendMessage(option.chat.id, "Hello, I am a bot. I am here to help you find the latest jokes. Type /joke to get a joke");
    }
});

bot.onText(/\/joke/, async (option) => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    console.log(response.data);
    const setup = response.data.setup;
    const punchline = response.data.punchline;

    bot.sendMessage(option.chat.id, `${setup}, ${punchline}`);
});