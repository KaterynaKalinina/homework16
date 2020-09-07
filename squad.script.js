// function Squad(defaultResources) {
//     this.squad = [];
//     if (defaultResources) this.combineResources(defaultResources);
//  }
 
//  Squad.prototype.isReadyToMove;
//  Squad.prototype.isReadyToFight;
//  Squad.prototype.restore;
//  Squad.prototype.getReadyToMoveResources;
//  Squad.prototype.combineResources;
//  Squad.prototype.cloneResource;

 class Squad extends MilitaryResource {
    constructor (type, health, maxHealth, distance, maxDistance, ...defaultResources) {
        super (type, health, maxHealth, distance, maxDistance);
        this.squad = [...defaultResources];
        if (defaultResources) this.combineResources(defaultResources);
    }

    getReadyToMoveResources() {
        console.log('I am getting ready to move resaurces');
    }

    combineResources(resource) {

    }

    cloneResources() {
        
    }
 }