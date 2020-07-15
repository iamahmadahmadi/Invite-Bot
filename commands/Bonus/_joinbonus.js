/*CMD
  command: /joinbonus
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Bonus
  answer: 
  keyboard: 
  aliases: 🎁 bonus
CMD*/

Api.getChatMember({
chat_id : -1001391644363 ,
user_id : user.telegramid,
    
    // this command will be executed after getting photos
    on_result: "/onjoinbonus"
  //  on_error: "onDemo"
});
