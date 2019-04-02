let timePassing;
let seconds = 0;




class Tomagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 0;
      this.sleepiness = 0;
      this.boredom = 0;
      this.age = 0;
    }
}

let myPet = new Tomagotchi();
    
function hungerFunc() {
      if(myPet.hunger >= 10) {
        console.log(myPet.name + " has starved to death.");
      }
    }  
function sleepyFunc() {
      if(myPet.sleepiness >= 10) {
        console.log(myPet.name + " went on a crack binge and died of sleep deprivation.");
      }
    }    
function boredFunc() {
      if(myPet.boredom >= 10) {
        console.log(myPet.name + " was bored to death.")}
      
      }
      
function diedOfOldAge () {
      if(myPet.age >= 10) {
        console.log(myPet.name + " lived a long and happy life");
           // prompt('Write an Obituary');<--?
      
      } 
    }


const ageIncreases= () => {
        seconds++;
        $('.time').text(seconds)
        if(seconds % 10 === 0){
            age++;
            $('.age').text(age);
        }
     }  
$('.submit').click(function(){
        timePassing = setInterval(ageGoesUp, 1000);
     })
$('.attention').on('click', () => {
    myPet.boredom =+ 1
})
$('.sleep').on('click', () => {
    myPet.sleepiness =+ 1
})
$('.food').on('click', () => {
    myPet.hunger =+ 1
})
$('.startover').click(function(){
        clearInterval(timePassing);
     })
  
//   const tomagotchiFactory = {
//     tomagotchis: [],
//     generateTomagotchi(name) {
//       const newTomagotchi = new Tomagotchi(name)
//       this.tomagotchis.push(newTomagotchi);
//       return newTomagotchi;
//     },
//     findTomagotchi(index) {
//       return this.tomagotchis[index],
//         console.log(this.tomagotchis[index]);
//     }
//   }
  
  