const { Telegraf } = require('telegraf')

var binder = require("heroku-bind-port")
binder()

var Units = require("ethereumjs-units")
const fetch = require('node-fetch')


require('dotenv').config()

function valueBNB(val){
    return Units.convert(val.toString(), "wei", "eth");
}

const bot = new Telegraf(process.env.TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(':thumbsup:'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('rugme', (ctx) => ctx.reply("the presale link is " + 'https://app.bounce.finance/fixed-swap/5350' + " ser"))

bot.command('rugfunds', (ctx) => {
    fetch('https://api.bscscan.com/api?module=account&action=balance&address=0x00c6efa79ccd7d184e207ea48f09726e89a33249&tag=latest')
        .then(res => res.json())
        .then(json => {
            let donations = valueBNB(json.result)
            ctx.reply("people lost " + donations.substr(0,donations.indexOf(',')+3) + " BNB so far, ser");
        });
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))