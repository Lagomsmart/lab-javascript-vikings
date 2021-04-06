// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack = () => {
        return this.strength
    }
    receiveDamage = (dmg) => {
        this.health -= dmg
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage = (dmg) => {
        this.health -= dmg;
        if (this.health > 0) {
            return `${this.name} has received ${dmg} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = () => {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = (dmg) => {
        this.health -= dmg;
        if (this.health > 0) {
            return `A Saxon has received ${dmg} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking = (Viking) => {
        this.vikingArmy.push(Viking)
    }

    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack = () => {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        saxon.receiveDamage(viking.strength)

        if (saxon.health < 1) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1)
        }
        return this.saxon.health - this.viking.strength;
    }

    saxonAttack = () => {
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let dmg = this.viking.health - saxon.strength

        if (this.viking.health < 1) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1)
        }
        return dmg
    }

    showStatus = () => {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 1) { return `Vikings and Saxons are still in the thick of battle.` }
        if (this.vikingArmy.length < 1) { return `Saxons have fought for their lives and survived another day...` };
        if (this.saxonArmy.length < 1) { return `Vikings have won the war of the century!` };
    }

}


// - should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
// - should remove dead saxons from the army
// - should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`