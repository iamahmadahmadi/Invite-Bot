/*CMD
  command: /giveBonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bonus
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.runAll( {
    // this command will be executed
    // for each private chat (user)
    command: "/bonus",
    for_chats: "private-chats"
} )
