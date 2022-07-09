alert ("Welcome to Bunnigachi! Use the buttons to keep all levels below 10, or your bunny will perish!")

class Tamagotchi {
    constructor(){
        this.name = prompt ("What is your rabbit's name?")
        this.hunger = 1
        this.sleepiness = 1
        this.boredom = 1
        this.age = 0
        document.querySelector("h1").innerText = `This is your rabbit, ${this.name}!`
    }
    
    getOld(){
        this.age++
        if (this.age >= 10) {
        document.querySelector('img').src="./images/bunny3final.png"};
        document.querySelector(".age").innerText = `Age: ${this.age}`;
        }

    getSleepy(){
        if (this.sleepiness < 10){
            this.sleepiness++
            document.querySelector(".sleep").innerText = `Sleepiness: ${this.sleepiness}`
        } else {
            alert (`${this.name} stayed up too long and fell asleep for good. Goodnight, sweet prince.`)
            location.reload()
        }
            
        }
    
    getBored() {
        if (this.boredom < 10){
            this.boredom++
            document.querySelector(".boredom").innerText = `Boredom: ${this.boredom}`
        } else {
            alert (`${this.name} has died of sheer boredom. Don't take it personally.`)
            location.reload() 
        }
    }
    getHungry() {
        if (this.hunger < 10){
            this.hunger++
            document.querySelector(".hunger").innerText = `Hunger: ${this.hunger}`
        } else {
            alert (`${this.name} has starved and passed away. That bites.`)
            location.reload()
            }
    }
    
    feedPet = () => {
        this.hunger = this.hunger - 1
    };
    playTime = () => {
        this.boredom = this.boredom -1
    }


    lightSwitch () {
        document.body.classList.toggle("darkMode");
        this.sleepiness--
    }
    
}
 
const pet = new Tamagotchi ()
console.log(pet)

setInterval(() => {pet.getOld()}, 2000)
setInterval(() => {pet.getBored()}, 3000)
setInterval(() => {pet.getHungry()}, 4000)
setInterval(() => {pet.getSleepy()}, 6000)


const playButton = document.querySelector('.play');
playButton.addEventListener('click',() => {pet.playTime()})
   
const feedButton = document.querySelector('.feed');
feedButton.addEventListener('click', () => {pet.feedPet()});

const lightSwitch = document.querySelector(".lights");
lightSwitch.addEventListener('click', () => {pet.lightSwitch()})
