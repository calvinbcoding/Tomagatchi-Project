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

let myPet = new Tomagotchi(name);

    
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
      
// function diedOfOldAge () {
//       if(myPet.age >= 10) {
//         console.log(myPet.name + " lived a long and happy life");
           // prompt('Write an Obituary');<--?
      
    //   } 
    // }


const secondsGoUp = () => {
        seconds++;
        console.log(seconds);

        if(seconds % 10 === 0){
            myPet.age++;
            $('.age').text(myPet.age);

        if(seconds % 5 ===0){
          myPet.boredom++;
          $('.boredom').text(myPet.boredom);
        
        if(seconds % 6 === 0){
          myPet.hunger++;
          $('.hunger').text(myPet.hunger);

        if(seconds % 4 === 0){
          myPet.sleepiness++;
          $('.sleepiness').text(myPet.sleepiness);
        }
        }
        }
        }
     }  
$('.submit').click(function(){
    $('.time').text(seconds);
        timePassing = setInterval(secondsGoUp, 300);
        $('.name').val('');
        $('#pet-name').text('Name: ' + myPet.name);
      })
    
$('.attention').on('click', () => {
    myPet.boredom -- 
})
$('.sleep').on('click', () => {
    myPet.sleepiness -- 
})
$('.food').on('click', () => {
    myPet.hunger -- 
})
$('.startover').click(function(){
        clearInterval(timePassing);
     })
  let $it;
     $(document).on('click', (e) => {
       $it = $(e.target);
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

  