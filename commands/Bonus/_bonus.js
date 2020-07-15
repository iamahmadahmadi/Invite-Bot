/*CMD
  command: /bonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bonus
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.ResourcesLib.userRes("coin").add(100);
var balance = Libs.ResourcesLib.userRes("coin").value();
var doge = balance / 50;
Bot.sendMessage("🎁 You have received 100 coins from Administator.\n\nBalance: "+balance+" Coins\nIn Dogecoin: "+doge+" DOGE\n\n@FaucetCrypto_en");
