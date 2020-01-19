function Fighter(fighter) {
    let wins = 0;
    let loss = 0;
    let totalHp = fighter.hp;
    return {
       getName(){
        return fighter.name;
       },
       getDamage(){
         return fighter.damage;
       },
       getStrength(){
         return fighter.strength;
       },
       getAgility(){
         return fighter.agility;
       },
       getHealth(){
         return fighter.hp;
       },
       attac(defender) {
         let percent = 100;
           let chanceToGetHit = Math.floor(Math.random() * percent) ;
           let chanceToavoid = defender.getStrength() + defender.getAgility(); 
           if (chanceToGetHit < chanceToavoid){
             console.log(`${this.getName()} attack missed `);
          } else{
             console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()} `);
             defender.dealDamage(this.getDamage());
          }
        },
        dealDamage(demag) {
          let health = this.getHealth();
          let healthLeft = health - demag;
          if(healthLeft < 0 ){
            fighter.hp = 0;
          }else{
            fighter.hp = healthLeft;
          }
          return fighter.hp; 
        },
        heal(amountOfHealth){
          let health = this.getHealth() + amountOfHealth;
          if(health > totalHp) {
            fighter.hp = totalHp;
          }else{
            fighter.hp = health;
          } 
          return fighter.hp; 
        }, 
        addWin(){
          return wins++;
        },
        addLoss(){
          return loss++;
        },
        logCombatHistory(){
          return `Name: ${this.getName()}, Wins: ${wins}, Losses: ${loss} `
        }
  
    }
  }
  
  function battle(fighter1, fighter2){
    if(fighter1.getHealth() === 0){
      console.log(`${fighter1.getName()} is dead and can't fight`);
    }else if(fighter2.getHealth() === 0){
      console.log(`${fighter2.getName()} is dead and can't fight`);
    }else{
      while(fighter2.getHealth() > 0 && fighter1.getHealth() > 0){
        fighter1.attac(fighter2);
        fighter2.attac(fighter1);
      }
      if(fighter1.getHealth() > 0 ){
        console.log(`${fighter1.getName()} has won!`);
        fighter1.addWin();
        fighter2.addLoss();
      }else{
        console.log(`${fighter2.getName()} has won!`);
        fighter2.addWin();
        fighter1.addLoss();
      }
      
    }
  }
 