


let seconds = 0;




class Tomagotchi {
    constructor() {
      this.name = "name";
      this.age = 0;
      this.sleepiness = 0;
      this.boredom = 0;
      this.hunger = 0;
    }
}

let myPet = new Tomagotchi(name);


    if(myPet.boredom >= 10){
      alert(myPet.name + " was bored to death.");
    }
    if(myPet.sleepiness >= 10){
      console.log(myPet.name + " went on a crack binge and died of sleep deprivation.");
    }
    if(myPet.hunger >= 10){
      console.log(myPet.name + " has starved to death.");
    }
    
 

const secondsGoUp = () => {
        seconds++;
        console.log(seconds);

        if(seconds % 9 === 0)
          {myPet.age++;
            $('.age').text('Age: ' + myPet.age)
            console.log(myPet.name + " is" + myPet.age + "years old")}

        if(seconds % 7 ===0)
          {myPet.boredom++;
          $('.boredom').text('Boredom: ' + myPet.boredom)}
        
        if(seconds % 5 === 0)
          {myPet.hunger++;
          $('.hunger').text('Hunger: ' + myPet.hunger)}

        if(seconds % 11 === 0)
        {myPet.sleepiness++;
          $('.sleepiness').text('Sleepiness: ' + myPet.sleepiness)}


    if(myPet.boredom >= 10){
      console.log(myPet.name + " was bored to death.");
    }
    if(myPet.sleepiness >= 10){
      console.log(myPet.name + " went on a crack binge and died of sleep deprivation.");
    }
    if(myPet.hunger >= 10){
      console.log(myPet.name + " has starved to death.");
    }
    
        };

$('.submit').on('click', () => {
    $('.age').text(seconds);
      window.timePassing = setInterval(secondsGoUp, 1000)});


    // $('#pet-name').text('Name: ' + myPet.name);
      
    
$('.attention').on('click', () => {
    myPet.boredom --
  });
  // let $it;
  //    $(document).on('click', (e) => {
  //      $it = $(e.target);
  //    })

$('.sleep').on('click', () => {
    myPet.sleepiness -- 
});
$('.food').on('click', () => {
    myPet.hunger -- 
});
// $('.Rick').fadeToggle('keypress', () => {

// });

// $('#updatePetBtns').on('click', myPet);
// myPetDied();

const stopInterval = () => {
  clearInterval(window.timePassing)
}

$('.startover').on('click',function(){stopInterval();}
      );
