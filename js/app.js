

let timePassing;
let seconds = 0;




class Tomagotchi {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.sleepiness = 0;
      this.boredom = 0;
      this.hunger = 0;
    }
}

let myPet = new Tomagotchi(name);

    
// function hungerFunc() {
//       if(myPet.hunger >= 10) {
//         console.log(myPet.name + " has starved to death.");
//       }
//     }  
// function sleepyFunc() {
//       if(myPet.sleepiness >= 10) {
//         c
//       }
//     }    
// function boredFunc() {
      
      
      // }
      
// function diedOfOldAge () {
//       if(myPet.age >= 10) {
//         console.log(myPet.name + " lived a long and happy life");
           // prompt('Write an Obituary');<--?
      
    //   } 
    // }
  function myPetDied () {
    if(myPet.boredom >= 10) {
      console.log(myPet.name + " was bored to death.")}
    if(myPet.sleepiness>=10){
      console.log(myPet.name + " went on a crack binge and died of sleep deprivation.")}
    if(myPet.hunger >= 10) {
        console.log(myPet.name + " has starved to death.")}
    }
 

const secondsGoUp = () => {
        seconds++;
        console.log(seconds);

        if(seconds % 1 === 0){
            myPet.age++;
            $('.age').text('Age: ' + myPet.age);

        if(seconds % 3 ===0){
          myPet.boredom++;
          $('.boredom').text('Boredom: ' + myPet.boredom);
        
        if(seconds % 2 === 0){
          myPet.hunger++;
          $('.hunger').text('Hunger: ' + myPet.hunger);

        if(seconds % 4 === 0){
          myPet.sleepiness++;
          $('.sleepiness').text('Sleepiness: ' + myPet.sleepiness);
        myPetDied();
      }
        }
        }
        }
     }  
$('.submit').click(function() {
    $('.time').text(seconds);
      timePassing = setInterval(secondsGoUp, 90);

$('.name').val('');
        $('#pet-name').text('Name: ' + myPet.name);
      })
    
$('.attention').on('click', () => {
    $('.attention').val(myPet.boredom --);

})
$('.sleep').on('click', () => {
    myPet.sleepiness -- 
})
$('.food').on('click', () => {
    myPet.hunger -- 
})
$('.rick').fadeToggle(myPet.age)

$('.startover').click(function(){
        clearInterval(timepassing)})

// $('.start').click(function(){
//   timePassing = setInterval(secondsGoUp, 1000);
// })
// $('.stop').click(function(){
//   clearInterval(timePassing);
// })
//   // let $it;
  //    $(document).on('click', (e) => {
  //      $it = $(e.target);
  //    })
    

  
  
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

  