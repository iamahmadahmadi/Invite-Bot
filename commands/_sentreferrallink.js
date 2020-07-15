/*CMD
  command: /sentreferrallink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Welcome to Faucet Crypto™ Invite Bot !
  keyboard: 💵 Withdraw,💰 Balance,\n🙌🏻 Referrals,👤 Contact us,\n🎁 Bonus
  aliases: 🏠 menu
CMD*/

var refUser = Libs.ReferralLib.currentUser.attractedByUser() ;
 if (refUser != null){
let refUserBonus = Libs.ResourcesLib.anotherUserRes("coin", refUser.telegramid);
  refUserBonus.add(20);  // add 100 bonus for friend
Bot.sendMessageToChatWithId(refUser.id,"_A friend signed up with your link!_ \n *+20 Coins*");
}

