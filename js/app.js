class Tamagotchi {
    constructor(){
        this.name = prompt ("What is your pet's name?")
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
    }
    
    getOld(){
        this.age++
        document.querySelector(".age").innerText = `Age: ${this.age}`;
        if (this.age >= 10){
            document.querySelector('img').src="./images/bunny3final.png"
         }
        
    }

    getSleepy(){
        if (this.sleepiness < 10){
            this.sleepiness++
            document.querySelector(".sleep").innerText = `Sleepiness: ${this.sleepiness}`
        } else {
            alert (`${this.name} stayed up too long and fell asleep for good. Goodnight, sweet prince.`)}
        }
    
    getBored(){
        if (this.boredom < 10){
            this.boredom++
        } else {
            alert (`${this.name} has died of sheer boredom. Don't take it personally.`) 
        }
    }
    getHungry() {
        if (this.hunger < 10){
            this.hunger++
        } else {
            alert (`${this.name} has starved and passed away. That bites.`);
            location.reload()
        }
    }
    
    feedPet = () => {
        this.hunger = this.hunger - 1
    };
    playTime = () => {
        this.boredom = this.boredom -1
    }

    bedTime() {
        document.body.classList.toggle("darkMode");
        this.sleepiness--
    }
    
}
const pet = new Tamagotchi ()
console.log(pet)

setInterval(() => {pet.getOld()}, 6000)
setInterval(() => {pet.getBored()}, 2000)
setInterval(() => {pet.getHungry()}, 3000)
setInterval(() => {pet.getSleepy()}, 4000)


const playButton = document.querySelector('.play');
playButton.addEventListener('click',() => {pet.playTime()})
   
const feedButton = document.querySelector('.feed');
feedButton.addEventListener('click', () => {pet.feedPet()});

const lightSwitch = document.querySelector(".lights");
lightSwitch.addEventListener('click', () => {pet.bedTime()})







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