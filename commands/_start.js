/*CMD
  command: /start
  help: Restart Bot
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Do You Know Faucet Crypto™?
  keyboard: Yes,No
  aliases: 
CMD*/



function doTouchOwnLink(){
  Bot.sendMessage("You should send this link to others!");
}

function doAttracted(channel){
}

function doAtractedByUser(refUser){
 /* Bot.sendMessage("User: " + 
    refUser.first_name + " (@" + refUser.username+") Entered via your link... But not signed up yet");
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You just attract new user: @" + user.username);
*/
}

function doAlreadyAttracted(){
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);



