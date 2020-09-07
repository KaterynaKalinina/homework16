 class MilitaryResource {
     constructor(type, health, maxHealth, distance, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.distance = distance;
        this.maxDistance = maxDistance;
     }

     isReadyToMove() {
         console.log('I am ready to move');
     }

     isReadyToFight() {
         console.log('I am ready to fight');
     }

     restore() {
         return this.health = this.maxHealth;
     }

    //  clone(unit) {
    //     for (const key in unit) {
    //         if (object.hasOwnProperty(key)) {
    //             return this.key = unit[key];
                
    //         }
    //     }
    //  }
 }

