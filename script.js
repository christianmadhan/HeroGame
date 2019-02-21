let Role = {
    Lemur: 1,
    Ninja: 2,
    Paladin: 3,
    Wizzard: 4,
    Bodybuilder: 5,
    King: 6,
};

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  

class Characters{
    constructor(name, healthPoint, attackDamage){
        this.name = name;
        this.healthPoint = healthPoint;
        this.attackDamage = attackDamage;
    };
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
let Kraken = new Beast("Kraken the monster from the depth", 120, 2, "The heart of the sea", Role.Wizzard, "Sea creature");
let Kubo = new Beast("Kubo the depressed onion", 10, -1, "Complains", Role.Lemur, "hedgehog");


function greeter(){
    console.log("Lets Fight!");
    console.log("Match: " + Pato.name + " Vs " + Kurama.name);
}

function HeroAttack(Hero, Beast){
    if(Beast.weakness == Hero.Role){
      var randomNum = Math.floor(Math.random() * (Hero.attackDamage + 4)) + 1;
    } else {
        var randomNum = Math.floor(Math.random() * Hero.attackDamage) + 1;
    }

    return randomNum;
}

function BeastAttack(Beast){
    var damageByBeast = Math.floor(Math.random() * Beast.attackDamage) + 1;

    return damageByBeast;
}

const game = async () => {
    let pickedHeroHP = Pato.healthPoint;
    let pickedBeastHP = Kurama.healthPoint;
     
    while(true){
        if(pickedHeroHP <= 0 || pickedBeastHP <= 0){
            console.log("Game is finish!")
            if(pickedBeastHP > pickedHeroHP){
                console.log("Beast won! ");
            }

            if(pickedHeroHP > pickedBeastHP){
                console.log("Hero Won!");
            }

            return false;

        } else {
            console.log(" Hero HP: " + pickedHeroHP);
            console.log(" Beast HP: " +  pickedBeastHP);
            console.log("");
            console.log("");
            await sleep(200);
    
            console.log(Pato.name + " Attacks!");
            pickedBeastHP -= HeroAttack(Pato, Kurama);
            pickedHeroHP -= BeastAttack(Kurama);
            console.log("It was Highly Effective!");
            console.log("Kurama hp: " + pickedBeastHP);
        }


    }

}

game();




