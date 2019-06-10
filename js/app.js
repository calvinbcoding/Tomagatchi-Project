


let seconds = 0;




class Tomagotchi {
      name = "name";
      age = 0;
      sleepiness = 0;
      boredom = 0;
      hunger = 0;
    };


let myPet = new Tomagotchi(name);



    if(myPet.boredom > 10){
      alert(myPet.name + " was bored to death.");
    }
    if(myPet.sleepiness > 10){
      console.log(myPet.name + " went on a crack binge and died of sleep deprivation.");
    }
    if(Tomagotchi.hunger > 10){
      console.log(myPet.name + " has starved to death.");
    }
    
 

const secondsGoUp = () => {
        seconds++;
        console.log(seconds);
        console.log(myPet.name);

        if(seconds % 14 === 0){
          myPet.age++;
          $('.age').text('Age: ' + myPet.age)
          console.log(myPet.name + " is" + myPet.age + "years old");
        } if(seconds % 7 ===0)
          {myPet.boredom++;
          $('.boredom').text('Boredom: ' + myPet.boredom)
        } if(seconds % 5 === 0){
          myPet.hunger++;
          $('.hunger').text('Hunger: ' + myPet.hunger)
        } if(seconds % 9 === 0){
        {myPet.sleepiness++;
          $('.sleepiness').text('Sleepiness: ' + myPet.sleepiness)}
        }
      };

    if(myPet.boredom >= 1000){
      console.log(myPet.name + " was bored to death.");
    }
    if(myPet.sleepiness >= 20){
      console.log(myPet.name + " went on a crack binge and died of sleep deprivation.");
    }
    if(myPet.hunger >= 20){
      console.log(myPet.name + " has starved to death.");
    }
    
        
// const startGame = (e) => {
//   e.preventDefault();
  //let myPet.name = $('#pet-name').val()
$('.submit').on('click', (e) => {
    $(myPet.name).val()
    $('#pet-name').val(myPet.name);
    $('.age').text(seconds);
      window.timePassing = setInterval(secondsGoUp, 1000)});


    //  $('#pet-name').text('Name: ' + myPet.name);
 $('.button').on('click', (e)=>{
   render(e)
 }
 )     
   
$('.attention').on('click', (e) => {
    myPet.boredom--
});
  
  // let $it;
  //    $(document).on('click', (e) => {
  //      $it = $(e.target);
  //    })

$('.sleep').on('click', (e) => {
    myPet.sleepiness -- 
});
$('.food').on('click', (e) => {
    myPet.hunger -- 
});
// $('.Rick').fadeToggle('keypress', () => {

// });

$('#updatePetBtns').on('click', (e)=>{
  render(e)} );
// myPetDied();

const stopInterval = () => {
  clearInterval(window.timePassing)
}

$('.startover').on('click',function(){stopInterval();}
      );
