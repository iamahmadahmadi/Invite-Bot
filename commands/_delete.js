/*CMD
  command: /delete
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
You are in delete balance mode :

Please send user id:
  ANSWER
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.anotherUserRes("coin",message);
res.set(0);
Bot.sendMessage("Done!\nCurrent balance: "+res.value());
Bot.sendMessageToChatWithId(message,"**Hello** User,\n❌ **Our system found out that more than 50% of your referrals are fake !\n\n**__You can contact your referrals or try inviting real friends.\n\n__**Your balance has been reset and You'll get permanent ban if you do it twice !**");
