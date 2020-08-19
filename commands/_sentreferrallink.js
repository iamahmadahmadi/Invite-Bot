/*CMD
  command: /sentreferrallink
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Welcome to Faucet Crypto™ Invite Bot !
  keyboard: 💵 Withdraw,💰 Balance,\n🙌🏻 Referrals,👤 Contact us,\n🎁 Bonus
  aliases: 🏠 menu
CMD*/

//Variable which checks if this user registered before or not
var registered = Libs.ResourcesLib.userRes("registered")
//Variable which checks if this user is active or not (has referrals)
var active = Libs.ResourcesLib.userRes("active")
//Referrer Account
var refUser = Libs.ReferralLib.currentUser.attractedByUser()
//Variable which checks if referrer is active or not (has referrals)

if (refUser != null) {
  let refcommand = "/payreferrer " + refUser.telegramid
  //let refUserBonus = Libs.ResourcesLib.anotherUserRes("coin", refUser.telegramid);
  let activeReferral = Libs.ResourcesLib.anotherUserRes(
    "active",
    refUser.telegramid
  )
  if (registered.value() == 0) {
    Bot.runCommand(refcommand)
    activeReferral.set(1)
  } // add 100 bonus for friend
}
registered.set(1)

