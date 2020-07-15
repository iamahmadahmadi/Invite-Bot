/*CMD
  command: /inviteMessage
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("coin");
let refList = Libs.ReferralLib.currentUser.refList.get(); 
let balance = res.value();

if (refList.length == 0)
{
Bot.sendMessage("[!Alert!](http://s10.picofile.com/file/8394456050/alert.png)\nHello "+ user.username + " !\n*‼️ +8000 coins* available to earn today!\n\nOur system detected you as a fake user!\nIf you can see this message means you are not fake.\n*You have to invite a friend in the next 24h to verify yourself.*");
}
else if (balance >= 200)
{
Bot.sendMessage("🔥🔥 *Congratulations !\n\nYour balance is more than 200 coins,*\nYou can withdraw in any coin via *💵 Withdraw* button.");
}
else {
Bot.sendMessage("[FaucetCrypto](http://s10.picofile.com/file/8394456426/fauf.jpg)\nHello "+ user.username + " !\n\n*‼️ +8000 coins* available to earn today!\nOur system says you need " + (200-balance) + " more coins to withdraw");
}
