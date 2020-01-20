function Fighter(fighter) {
    let wins = 0;
    let loss = 0;
    const totalHp = fighter.hp;
    let fighterName = fighter.name;
    let fighterDamage = fighter.damage;
    let fighterStrength = fighter.strength;
    let fighterAgility = fighter.agility;
    let fighterHp = fighter.hp;
    return {
       getName(){
        return fighterName;
       },
       getDamage(){
         return fighterDamage;
       },
       getStrength(){
         return fighterStrength;
       },
       getAgility(){
         return fighterAgility;
       },
       getHealth(){
         return fighterHp;
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
          fighterHp = healthLeft < 0 ? 0 : healthLeft;
        },
        heal(amountOfHealth){
          const health = this.getHealth() + amountOfHealth;
          fighterHp = health > totalHp ? totalHp : health;
        }, 
        addWin(){
           wins++;
        },
        addLoss(){
           loss++;
        },
        logCombatHistory(){
          console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${loss}`);
        }
    }
  }
  
  function battle(fighter1, fighter2){
    if(!fighter1.getHealth()){
      console.log(`${fighter1.getName()} is dead and can't fight`);
    }else if(!fighter2.getHealth()){
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