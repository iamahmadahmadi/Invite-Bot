/*CMD
  command: /referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 🙌🏻 referrals
CMD*/

let lib = Libs.ReferralLib
let parther_link=Libs.ReferralLib.currentUser.getRefLink("FaucetCryptoInviteBot");

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "" + refList.length;

}else{
  msg = "no";
}

let textToSend = "You have "+msg+" referrals, and earned "+ (refList.length * 20) +" Coins.\n\n"+"To refer people, send them to:\n"+
parther_link +"\n\nYou will earn 20 coins at each user's signup in the bot, and 25% of coins they earn.";
Bot.sendMessage(textToSend);
