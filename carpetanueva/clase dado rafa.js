class Dado{
    constructor(n_faces){
        this.n_faces = n_faces;
    }
    get number(){
        return this.throw();
    }
    throw(){
        return Math.round((Math.random() * this.n_faces - 1) + 1);
    }
}

class Heroe{
    constructor(attack, defense,health){
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    }
    attack_power(multiplier){
        return this.attack * multiplier;
    }
    defense_skill(multiplier){
        return this.defense * multiplier;
    }
    set set_health_points(health_points){
        this.health = health_points;
    }
    get get_health_points(){
        return this.health;
    }
}

class Game{
    constructor(attacker, defender){
        this.attacker = attacker;
        this.defender = defender;
    }
    fight(){
        while(this.attacker.get_health_points > 0 && this.defender.get_health_points > 0){
            let dado_attacker = new Dado(6);
            let dado_defender = new Dado(6);
            const defender_attack_power = this.defender.attack_power(dado_attacker.number);
            const attacker_attack_power = this.attacker.attack_power(dado_defender.number);
            const defender_defense_power = this.defender.defense_skill(dado_attacker.number);
            const attacker_defense_power = this.attacker.defense_skill(dado_attacker.number);
            const new_attacker_hp = (attacker_defense_power + this.attacker.get_health_points)-defender_attack_power;
            const new_defender_hp = (defender_defense_power + this.defender.get_health_points)- attacker_attack_power;
            this.attacker.set_health_points = new_attacker_hp;
            this.defender.set_health_points = new_defender_hp;
            console.log("HP Atacante "+this.attacker.get_health_points);
            console.log("HP Defensor "+this.defender.get_health_points);
        }
        if(this.attacker.get_health_points > 0){
            console.log("Gana el boss");
        }else{
            console.log("Gana el defensor");
        }
    }
}
const attacker = new Heroe(15,10,1000);
const defender = new Heroe(10,15,1000);
const rol = new Game(attacker,defender);
rol.fight();




