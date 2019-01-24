const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '706979843:AAEkbTg9FMhEcp_NgcR5bU6UpPJYYnxCXJM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'hello from belev!, hi ${msg.from.first_name}')
})