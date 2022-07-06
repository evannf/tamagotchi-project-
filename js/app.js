class Tamagotchi {
    constructor(name){
        name = this.name
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
    }
    getOld(){
        this.age = this.age + 1
        if (this.age === 5){
            //morph to bunny2 here
        } else if (this.age >= 10){
            //morph to bunny3 here
        }
        
    }
    getSleepy(){
        this.sleepiness = this.sleepiness + 1
        if (this.sleepiness === 10){
            alert (`${this.name} stayed up too long and fell asleep for good. Goodnight, sweet prince.`)
        }
    }
    getBored(){
        this.boredom = this.boredom + 1
        if (this.boredom === 10){
            alert (`${this.name} has died of sheer boredom. Don't take it personally.`) 
        }
    }
    getHungry(){
        this.hunger = this.hunger + 1
        if (this.hunger === 10){
            alert (`${this.name} has starved and passed away. That bites.`)
        }
    }
//    setInterval(getOld(), 60000);    **ERROR**
}


const eddie = new Tamagotchi ('Eddie')
console.log(eddie)
class Game {
    
}