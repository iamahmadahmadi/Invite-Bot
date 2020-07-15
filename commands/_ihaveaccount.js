/*CMD
  command: /ihaveaccount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Step #3

Open [website](https://www.faucetcrypto.com/ref/93324)
Go to *dashboard -> Referral -> Referral Link*

Send your Referral Link here :
  ANSWER
  keyboard: 
  aliases: ✅ signed up, ✅ yes
CMD*/

let refUser = Libs.ReferralLib.currentUser.attractedByUser();
var details;
if ( message.slice(0,32) != "https://www.faucetcrypto.com/ref")
{
Bot.sendMessage(message + " is not a referral link !\nIt should start with https://www.faucetcrypto.com/ref");
Bot.runCommand("/ihaveaccount");
}
else
{
if(message.slice(33) == "93324")
{
Bot.sendMessage ("Your account can't be found in [Faucet Crypto](https://www.faucetcrypto.com/ref/93324),\n\nYou are logged in as a guest\n\nIf you want to have 25% reward of your referrals try /start again.");
Bot.runCommand("/ihaveaccount");
}
if (refUser)
{
details = "\nUsername: @"+user.username+"\nTelegramid:"+user.id + "\nReferrer: "+refUser.name+" @"+refUser.username+" ("+refUser.id+")";
var balance = Libs.ResourcesLib.anotherUserRes("coin",refUser.id);
balance.add(15);
Bot.sendInlineKeyboardToChatWithId('84895335',[ {title: "Ban Referrer", command: "/ban "+refUser.id} ], "user "+ message.slice(33) +" joined our community! \n\nDetails :"+ details);
}
else
{
details = "No referer !"
}
//Bot.sendMessageToChatWithId ("84895335","user "+ message.slice(33) +" joined our community! \n\nDetails :"+ details);
Bot.runCommand("/sentreferrallink");
}

