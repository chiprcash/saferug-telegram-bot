const { Telegraf } = require('telegraf')

var binder = require("heroku-bind-port")
binder()

require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(':thumbsup:'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('rugme', (ctx) => ctx.reply("the presale link is " + 'https://app.bounce.finance/fixed-swap/5350' + " ser"))
bot.command('rugfunds', (ctx) => ctx.reply("people lost 0.73 BNB so far, ser"))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))