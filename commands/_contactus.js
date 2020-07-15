/*CMD
  command: /contactus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Fell free to tell us about anything in the bot and 
make sure you do it in one message ;)
  ANSWER
  keyboard: 🏠 Menu
  aliases: 👤 contact us
CMD*/

Bot.sendMessageToChatWithId("84895335","A Direct Message from user "+user.username + "("+user.userid+")" + message);
