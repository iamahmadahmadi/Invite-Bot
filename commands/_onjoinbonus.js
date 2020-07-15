/*CMD
  command: /onjoinbonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var gotBonus = Libs.ResourcesLib.userRes("gotBonus");
var status = options.result.status;
var balance = Libs.ResourcesLib.userRes("balance");

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
  if (gotBonus.value() == 1)
  {
  Bot.sendMessage("You already received bonus !\n\nYou can earn more by inviting friends.");
  }
  else
  {
  balance.add(50);
  gotBonus.set(1);
  Bot.sendMessage("🎉 Congratulations! 🎉\n\nYou earned 50 free coins.\n\n💰 Balance : "+balance.value());
  }
   
}
else{
var buttons = [
    {title: "↗️ Go to Channel", url: "https://t.me/faucetcrypto_en"},
    {title: "🎁 Joined", command: "/joinbonus" }
];

Bot.sendInlineKeyboard(buttons, "📣 Join our sponsored channel to get free coins!");
}
