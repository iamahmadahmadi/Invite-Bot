/*CMD
  command: /payreferrer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser != null) {
  Bot.run({
    command: "/dopayreferrer",
    user_id: refUser.id // or use another user.id
    // bot_id: ANOTHER_BOT_ID // to run command for your another bot
  })
}

