function Fighter(fighter) {
    fighter.wins = 0;
    fighter.loss = 0;
    const totalHp = fighter.hp;
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
       attack(defender) {
           const PERCENT = 100;
           if (Math.random() * PERCENT < defender.getStrength() + defender.getAgility()){
             console.log(`${this.getName()} attack missed`);
           }else{
             console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
             defender.dealDamage(this.getDamage());
           }
        },
        dealDamage(demag) {
          const healthLeft = this.getHealth() - demag;
          healthLeft < 0 ? fighter.hp = 0 : fighter.hp = healthLeft;
        },
        heal(amountOfHealth){
          const health = this.getHealth() + amountOfHealth;
          health > totalHp ? fighter.hp = totalHp : fighter.hp = health;
        }, 
        addWin(){
           fighter.wins++;
        },
        addLoss(){
           fighter.loss++;
        },
        logCombatHistory(){
          console.log(`Name: ${this.getName()}, Wins: ${fighter.wins}, Losses: ${fighter.loss}`);
        }
    }
  }
  
  function battle(fighter1, fighter2){
    if(fighter1.getHealth() === 0){
      console.log(`${fighter1.getName()} is dead and can't fight`);
    }else if(fighter2.getHealth() === 0){
      console.log(`${fighter2.getName()} is dead and can't fight`);
    }else{
       while(fighter2.getHealth() && fighter1.getHealth()){
        fighter1.attack(fighter2);
        if(!fighter2.getHealth()){
          fighter1.addWin();
          fighter2.addLoss();
          console.log(`${fighter1.getName()} has won!`);
          return;
        }
        fighter2.attack(fighter1);
        if(!fighter1.getHealth()){
          fighter2.addWin();
          fighter1.addLoss();
          console.log(`${fighter2.getName()} has won!`);
          return;
        }
      }
    }
  }