class Characters{
    constructor(name, healthPoint, attackDamage){
        this.name = name;
        this.healthPoint = healthPoint;
        this.attackDamage = attackDamage;
    };
}; 

let Role = {
    Lemur: 1,
    Ninja: 2,
    Paladin: 3,
    Wizzard: 4,
    Bodybuilder: 5,
    King: 6,
};


class Hero extends Characters {
    constructor(name, healthPoint, attackDamage, gender, coins, heroRole ){
    super(name, healthPoint, attackDamage);
        this.gender = gender;
        this.coins = coins;
        this.heroRole = heroRole;
    };
};

class Beast extends Characters {
    constructor(name, healthPoint, attackDamage,value, weakness, type){
        super(name, healthPoint, attackDamage);
        this.value = value;
        this.weakness = weakness;
        this.type = type;
    };
};


let Pato = new Hero("Pato", 160, 13,"Male", 230, Role.Ninja);
let Ben = new Hero("Benjamin", 110, 5, "Female", 10, Role.Lemur);
let Christian = new Hero("Kong Christian", 100, 9, "Male", 1000, Role.King);


let Kurama = new Beast("Kurama the legend", 230, 5,"The tail of the fox", Role.Ninja, "Nine-tailed Fox");
let Kraken = new Beast("The monster from the depth", 120, 2, "The heart of the sea", Role.Wizzard, "Sea creature");
let Kubo = new Beast("The depressed onion", 10, -1, "Complains", Role.Lemur, "hedgehog");






