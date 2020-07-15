/*CMD
  command: /messageAdmin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.runAll( {
    // this command will be executed
    // for each private chat (user)
    command: "/notifybonus",
    for_chats: "private-chats"
} );
