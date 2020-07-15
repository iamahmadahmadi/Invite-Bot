/*CMD
  command: /withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💵 withdraw
CMD*/

let res = Libs.ResourcesLib.userRes("coin");
if (!res.have(200))
{
Bot.sendMessage("Minimum withdrawal: 200 coins\n💰 Balance: "+res.value());
}
else
{
Bot.sendMessage("You are good to go!\nSend your wallet address and the coin via *👤 Contact us* Button.\n\n(Coin:wallet)Such As:\nBTC:3HhvvC6jp37vnYA5Lech334STNq3jzEfmR");
res.set(0);
}
