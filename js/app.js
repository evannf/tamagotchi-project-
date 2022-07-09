class Tamagotchi {
    constructor(){
        this.name = prompt ("What is your pet's name?")
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
    }
    getOld(){
        this.age = this.age + 1
        if (this.age >= 10){
            document.querySelector('img').src="bunny3.png"
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
    getHungry() {
        if (this.hunger < 10){
            this.hunger + 1
        } else {
            alert (`${this.name} has starved and passed away. That bites.`)
        }
    }
}


const eddie = new Tamagotchi ()
console.log(eddie)

   
    const feedButton = document.querySelector('.feed');
    feedButton.addEventListener('click', feedPet());
    function feedPet() {
        Tamagotchi.hunger = Tamagotchi.hunger - 1
    };

    const play = () => {
        Tamagotchi.boredom = Tamagotchi.boredom - 1
    };

    const sleep = () => {
        Tamagotchi.sleepiness = Tamagotchi.sleepiness - 1
    };
    









function bedTime() {
    document.body.classList.toggle("darkMode")
}

const lightSwitch = document.querySelector(".lightSwitch");







//BROKEN CODE//

// const feedButton = document.querySelector(".feed");

// feedButton.addEventListener("click", feed())

// const playButton = document.querySelector(".play");

// playButton.addEventListener("click", play(){
//     Game.play();
// })

//framework for lights on/off TOGGLE function
// let bodyTag = document.querySelector('body')

// bodyTag.setAttribute('class','darkMode')