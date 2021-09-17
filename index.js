const { Telegraf, Telegram } = require("telegraf");

var binder = require("heroku-bind-port");
binder();

var Units = require("ethereumjs-units");
const fetch = require("node-fetch");

require("dotenv").config();

function valueBNB(val) {
  return Units.convert(val.toString(), "wei", "eth");
}

const players = ["zeus", "alf", "leon", "alex"];

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

function randomChessTournamentGroups() {
  shuffleArray(players);
  return players;
}

const bot = new Telegraf(process.env.TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.command("rugme", (ctx) =>
  ctx.reply(
    "the presale link is " +
      "https://v1.app.bounce.finance/fixed-swap/5350" +
      " ser"
  )
);
bot.command("coinflip", (ctx) =>
  ctx.reply(Math.random() >= 0.5 ? "heads" : "tails")
);
//bot.command('randomGroups', (ctx) => ctx.reply(randomChessTournamentGroups()))
bot.command("docs", (ctx) =>
  ctx.reply(
    "the documentation link is " + "https://docs.saferug.money/" + " ser"
  )
);
bot.command("website", (ctx) =>
  ctx.reply("the website link is " + "https://saferug.money/" + " ser")
);
bot.command("twitter", (ctx) =>
  ctx.reply(
    "the twitter link is " + "https://twitter.com/saferugmoney" + " ser"
  )
);
bot.command("reddit", (ctx) =>
  ctx.reply(
    "the reddit link is " + "https://www.reddit.com/r/saferugmoney" + " ser"
  )
);
bot.command("discord", (ctx) =>
  ctx.reply("the discord link is " + "https://discord.gg/AXut5uZQ8n" + " ser")
);
bot.command("rugwallet", (ctx) =>
  ctx.reply(
    "the saferug wallet link is " +
      "https://bscscan.com/address/0x00c6efa79ccd7d184e207ea48f09726e89a33249" +
      " ser"
  )
);
bot.command("howtobuy", (ctx) =>
  ctx.reply(
    "saferug cannot be bought on pancakeswap or other exchanges. to buy, you have to visit " +
      "https://v1.app.bounce.finance/fixed-swap/5350" +
      " ser"
  )
);
bot.command("liq", (ctx) =>
  ctx.reply(
    "due to a blockage in the token smart contract there won't ever be liquidity on pancakeswap or other exchanges. if you bought saferug on pancakeswap this means you bought the wrong saferug token, ser"
  )
);
bot.command("wenrug", (ctx) =>
  ctx.reply(
    "saferug is a presale rug. this means there is no fixed point in time where the team will steal funds. in a presale rug they are stealing the funds on each buy that happens on bounce presale platform"
  )
);
bot.command("v1", (ctx) =>
  ctx.reply(
    "the saferug v1 token gets explained here, ser: " +
      "https://docs.saferug.money/security/v1-exploit"
  )
);
bot.command("v2", (ctx) =>
  ctx.reply(
    "the saferug v2 token gets explained here, ser: " +
      "https://docs.saferug.money/security/v2"
  )
);
bot.command("soon", (ctx) =>
  ctx.reply(
    "current development plans can be viewed here, ser: " +
      "https://docs.saferug.money/in-the-pipeworks/ecosystem"
  )
);
bot.command("rugfunds", (ctx) => {
  fetch(
    "https://api.bscscan.com/api?module=account&action=balance&address=0x00c6efa79ccd7d184e207ea48f09726e89a33249&tag=latest"
  )
    .then((res) => res.json())
    .then((json) => {
      let donations = valueBNB(json.result);
      ctx.reply(
        "people lost " +
          donations.substr(0, donations.indexOf(".") + 3) +
          " BNB so far, ser"
      );
    });
});
bot.command("theme", (ctx) => {
  ctx.telegram.forwardMessage("@saferugofficial", "@saferugofficial", "2255");
  ctx.reply("https://www.instagram.com/i_contrix/");
});
bot.command("customersupport", (ctx) => {
  ctx.telegram.forwardMessage("@saferugofficial", "@saferugofficial", "10345");
  ctx.reply("check out Magadisu's rug project https://t.me/rug_mania");
});
bot.command("bong", (ctx) => {
  ctx.telegram.forwardMessage("@saferugofficial", "@saferugofficial", "2562");
  ctx.reply("https://www.instagram.com/i_contrix/");
});
bot.command("ciggy", (ctx) => {
  ctx.telegram.forwardMessage("@saferugofficial", "@saferugofficial", "5625");
  ctx.reply("https://www.instagram.com/i_contrix/");
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
