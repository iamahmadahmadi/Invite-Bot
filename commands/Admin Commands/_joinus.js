/*CMD
  command: /joinus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  photo: "http://s13.picofile.com/file/8400958726/Screenshot_2020_06_24_Faucet_Crypto_Multicoin_Faucet.png", // it is picture!
  caption: "Got questions about bot and website?\n\nJoin us at\n📣 Channel : @FaucetCrypto_en\n👥 Group : @FaucetCryptogroup",
  reply_markup: { inline_keyboard: [
    // line 1
    [
      // open the link on button pressing
      { text: "↗️ Go to Channel", url: "https://t.me/faucetcrypto_en" }
      // run command /onButton2 on button pressing
    ],
    // line 2
    [
       // see all params in
       // https://core.telegram.org/bots/api#inlinekeyboardbutton
       { text: "↗️ Join our Group", url: "https://t.me/faucetcryptogroup" }
    ]
  ]}
});
