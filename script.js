const aviation = new MilitaryResource('aviation', 100, 130, 0, 1000);
console.log(aviation);
aviation.isReadyToMove();
aviation.isReadyToFight();
aviation.restore();

const infantry = new MilitaryResource();
console.log(infantry);
//  infantry.clone(aviation);