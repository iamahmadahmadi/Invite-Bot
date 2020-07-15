/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💰 balance
CMD*/


let res = Libs.ResourcesLib.userRes("coin");
let ratio = res.value();

let price =   "_in Dogecoin: _" + (ratio / 50)+ "\n" ;
 //"_in Bitcoin(satoshi): _" + (ratio * 0.4)+ "\n" +
/*  "_in Ethereum: _" + (ratio * 0.000000189) + "\n" +
  "_in Dash: _" + (ratio * 0.000000388) + "\n" +
  "_in Litecoin: _" + (ratio *0.000000649)+ "\n" +
  "_in Bitcoin Cash: _" + (ratio * 0.000000116)+ "\n" +
  "_in Zcash: _" + (ratio * 0.000000814)+ "\n" +
  "_in Horizen: _" + (ratio * 0.000004504)+ "\n" +
  "_in Ethereum Classic: _" + (ratio *0.000005092)+ "\n" +
  "_in Bitcore: _" + (ratio *0.000122357)+ "\n" +
  "_in Blackcoin: _" + (ratio *0.001075817)+ "\n" +
  "_in Esbcoin: _" + (ratio *0.001968181)+ "\n" +
  "_in Komodo: _" + (ratio *0.000148621)+ "\n" +
  "_in Ox: _" + (ratio *0.000077513)+ "\n" +
  "_in Tron: _" + (ratio *0.00218817)+ "\n" +
  "_in Piratecash: _" + (ratio *0.005155669)+ "\n" +
  "_in Digibyte: _" + (ratio *0.005735223)+ "\n" +
  "_in Verge: _" + (ratio *0.010334782)+ "\n" +
  "_in Reddcoin: _" + (ratio *0.045537045)+ "\n" +
  "_in Niobio Cash: _" + (ratio *0.098813589)*/
Bot.sendMessage("*Invite Balance: " + res.value() + " coins.* \n\n"+ price);
