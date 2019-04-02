class Tomagotchi {
    constructor(name) {
      this.name = name;
      this.hunger = 0;
      this.sleepiness = 0;
      this.boredom = 0;
      this.age = 0;
    }
    hasDied() {
      if(this.hunger >= 10) {
        console.log(this.name + " has starved to death.");
      } else if(this.age >= 10) {
        console.log(this.name + " lived a long and happy life; dying of old age");
      } else if(this.boredom >= 10) {
        console.log(this.name + " was bored to death.");
      } else if(this.sleepiness >= 10) {
        console.log(this.name + " went on a crack binge and died of sleep deprivation.");
      }
    }
  }
  
  const tomagotchiFactory = {
    tomagotchis: [],
    generateTomagotchi(name) {
      const newTomagotchi = new Tomagotchi(name)
      this.tomagotchis.push(newTomagotchi);
      return newTomagotchi;
    },
    findTomagotchi(index) {
      return this.tomagotchis[index],
        console.log(this.tomagotchis[index]);
    }
  }
  
  