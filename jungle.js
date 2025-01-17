class Animal {
  #name;
  #species;
  #energy;
  static #remainingAnimals = 0;

  constructor(name, species, energy, attackEnergy, eatEnergy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    this.attackEnergy = attackEnergy;
    this.eatEnergy = eatEnergy;
    Animal.#remainingAnimals++;
  }

  getName() {
    return this.#name;
  }
  setName(name) {
    this.#name = name;
  }
  getSpecies() {
    return this.#species;
  }
  setSpecies(species) {
    this.#species = species;
  }
  getEnergy() {
    return this.#energy;
  }
  setEnergy(energy) {
    this.#energy = energy;
  }
  attack(target) {
    if (this.#energy > 0) {
      if (target.getEnergy() > 0) {
        target.setEnergy(target.getEnergy() - this.attackEnergy);
        this.setEnergy(this.getEnergy() - this.attackEnergy);
        if (target.getEnergy() <= 0) {
          Animal.#remainingAnimals--;
          console.log(`${this.getName()} wins! ${target.getName()} is out of energy`);
        }
        if (this.getEnergy() <= 0) {
          Animal.#remainingAnimals--;
          console.log(`${target.getName()} wins! ${this.getName()} is out of energy`);
        }
      } else {
        console.log(`${target.#name} is already died`);
      }
    } else {
      console.log(`${this.#name} has no energy to attack`);
    }
  }
  eat() {
    this.setEnergy(this.getEnergy() + this.eatEnergy);
  }
  static get remainingAnimals() {
    return Animal.#remainingAnimals;
  }
}

class Bird extends Animal {
  constructor(name, species, canFly) {
    super(name, species, 100);
    this.canFly = canFly;
    this.attackEnergy = 20;
    this.eatEnergy = 10;
  }
  attack(target) {
    super.attack(target);
  }
  eat() {
    super.eat();
  }
}

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species, 200);
    this.furColor = furColor;
    this.attackEnergy = 50;
    this.eatEnergy = 20;
  }
  attack(target) {
    super.attack(target);
  }
  eat() {
    super.eat();
  }
}

class Reptile extends Animal {
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.coldBlooded = coldBlooded;
    this.attackEnergy = 30;
    this.eatEnergy = 15;
  }
  attack(target) {
    super.attack(target);
  }
  eat() {
    super.eat();
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.getName()}, Species: ${eagle.getSpecies()}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.getName()}, Species: ${lion.getSpecies()}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.getName()}, Species: ${snake.getSpecies()}, Cold-Blooded: ${snake.coldBlooded}`
);

// Example attack
console.log("\n--- Attacks ---");
console.log(lion.getEnergy(), snake.getEnergy(), eagle.getEnergy());
lion.attack(snake);
console.log(lion.getEnergy(), snake.getEnergy(), eagle.getEnergy());
lion.attack(eagle);
console.log(lion.getEnergy(), snake.getEnergy(), eagle.getEnergy());
lion.attack(eagle);
console.log(lion.getEnergy(), snake.getEnergy(), eagle.getEnergy());
lion.attack(eagle);
console.log(lion.getEnergy(), snake.getEnergy(), eagle.getEnergy());

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
console.log(lion.getEnergy(), snake.getEnergy(), eagle.getEnergy());
