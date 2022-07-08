class Tamagotchi {
    constructor(name){
        name = prompt ("What is your pet's name?")
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
    }
    getOld(){
        if (this.age >= 5){
            //morph to bunny2 here
        } else if (this.age >= 10){
            //morph to bunny3 here
        }
        
    }
    getSleepy(){
        if (this.sleepiness < 10){
            this.sleepiness + 1
        } else {
            alert (`${this.name} stayed up too long and fell asleep for good. Goodnight, sweet prince.`)}
        }
    
    getBored(){
        if (this.boredom < 10){
            this.boredom + 1
        } else {
            alert (`${this.name} has died of sheer boredom. Don't take it personally.`) 
        }
    }
    getHungry(){
        if (this.hunger < 10){
            this.hunger + 1
        } else {
            alert (`${this.name} has starved and passed away. That bites.`)
        }
    }
}

const eddie = new Tamagotchi ('Eddie')
console.log(eddie)

class Game {
   
    feed(){
        this.hunger = this.hunger - 1
    }

    play(){
        this.boredom = this.boredom - 1
    }
    bedtime(){
        this.sleepiness = this.sleepiness - 1
    }
    
}








function bedTime() {
    document.body.classList.toggle("darkMode")
}

const lightSwitch = document.querySelector(".lightSwitch");

lightSwitch.addEventListener('click', function() {
})



const feedButton = document.querySelector(".feed");

feedButton.addEventListener("click", Game.feed())

// const playButton = document.querySelector(".play");

// playButton.addEventListener("click", play(){
//     Game.play();
// })

//framework for lights on/off TOGGLE function
// let bodyTag = document.querySelector('body')

// bodyTag.setAttribute('class','darkMode')