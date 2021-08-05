// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  }, // comma!
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

var fight = function(enemy) {
  // repeat and execute as long as the enemy-robot is alive 
  while (playerHealth > 0 && enemy.health > 0)  {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
 
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    // generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      player.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );
  
    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy + " has died!");
      break;
    } else {
      window.alert(enemy + " still has " + enemy.health + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = Math.max(0, playerHealth - damage);
    playerHealth = Math.max(0, playerHealth - damage);


    console.log(
      enemy.name + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = Math.max(0, playerMoney -10);
    console.log("playerMoney", playerMoney)
    break;
  }
}
    //if no (false), ask question again by running fight() again
    else fight();
        }
    }
};
// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerHealth > 0 && i < enemyInfo.length - 1) {
      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
    
      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
        var shop = function() {
          // ask player what they'd like to do
          var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
          );
        };
      }
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60)

      fight(pickedEnemyObj);
    }
    if(i < enemyInfo.length - 1) {
      shop();
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    // use switch to carry out action
    switch (shopOptionPrompt) {
      case "REFILL": // new case
      refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
        break;
        case "UPGRADE"
        upgradeAttack: function() {
          if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }
        }
        break;
      case "LEAVE": // new case
      case "leave":
        window.alert("Leaving the store.");
        break;
      default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    }
  }
};
// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}

var shop = function() {
  console.log("entered the shop");
};
}
// fight();
// play again
// startGame();
