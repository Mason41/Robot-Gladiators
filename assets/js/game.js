var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert ("Welcome to Robot Gladiators!");
    //Subtract the value of 'playerattack' from the value of 'enemyhealth' and use that result to update the value in the 'enemyhealth' variable
    enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to the console so we know that it worked.
    console.log (
        playerName + " attacked " + enemyName + "." + enemyName + "now has " + enemyHealth + "health remaining."
    )
    // subtract the value of 'enemyattack' from the valuse of 'playerheath' and use that result to updat the value in the 'playerhealth' variable
    playerHealth = playerHealth - enemyAttack;
    // log a resulting message to the console so we know that it worked.
    enemyName + " attacked " + playerName + "." + playerName + "now has" + playerHealth + "health remaining."
        // put new code under this
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
  console.log(enemyName + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining.");
  //check player's health 
  if (playerHealth <= 0) {
      window.alert(playerName + "has died!");
  }
  else {
      window.alert(playerName + " still has " + playerHealth + " health left. ");
  }
};

fight ();
