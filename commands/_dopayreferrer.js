/*CMD
  command: /dopayreferrer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var refUser = Libs.ReferralLib.currentUser.attractedByUser();
if (refUser != null) {
let refcoin = Libs.ResourcesLib.anotherUserRes("coin",refUser.telegramid);
refcoin.add(40);
Bot.sendMessageToChatWithId(refUser.telegramid,"_A friend signed up with your link!_ \n *+20 Coins*");
}
