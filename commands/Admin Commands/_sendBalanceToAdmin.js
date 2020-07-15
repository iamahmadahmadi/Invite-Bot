/*CMD
  command: /sendBalanceToAdmin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("coin");

if (res.value() >= 200)
{
let price ="Coins:" +res.value() +  "\n\n_in Bitcoin(satoshi): _" + (res.value() * 0.4)+ "\n" +
  "_in Ethereum: _" + (res.value() * 0.000000189) + "\n" +
  "_in Dash: _" + (res.value() * 0.000000388) + "\n" +
  "_in Litecoin: _" + (res.value() *0.000000649)+ "\n" +
  "_in Bitcoin Cash: _" + (res.value() * 0.000000116)+ "\n" +
  "_in Zcash: _" + (res.value() * 0.000000814)+ "\n" +
  "_in Horizen: _" + (res.value() * 0.000004504)+ "\n" +
  "_in Ethereum Classic: _" + (res.value() *0.000005092)+ "\n" +
  "_in Bitcore: _" + (res.value() *0.000122357)+ "\n" +
  "_in Blackcoin: _" + (res.value() *0.001075817)+ "\n" +
  "_in Esbcoin: _" + (res.value() *0.001968181)+ "\n" +
  "_in Tron: _" + (res.value() *0.00218817)+ "\n" +
  "_in Piratecash: _" + (res.value() *0.005155669)+ "\n" +
  "_in Digibyte: _" + (res.value() *0.005735223)+ "\n" +
  "_in Verge: _" + (res.value() *0.010334782)+ "\n" +
  "_in Dogecoin: _" + (res.value() *0.013989837)+ "\n" +
  "_in Reddcoin: _" + (res.value() *0.045537045)+ "\n" +
  "_in Niobio Cash: _" + (res.value() *0.098813589);
Bot.sendMessageToChatWithId("641612201","#WithdrawRequest\n@"+user.username + " ("+user.id+")"+"Wants to withdraw,\n\nAccount Balance:\n" + price);
}
