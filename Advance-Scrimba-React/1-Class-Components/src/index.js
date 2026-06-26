class Character {
  // If you need to initialize values when creating the object, you must include a constructor
  constructor(initialHP = 100) {
    this.hp = initialHP;
  }

  // If you will always initialize an instance with a hard-coded value, you can declare that without a constructor
  alive = true;

  // I can refer to the object calling this method as `this` and therefore can access and update the properties of this object with, e.g.: `this.hp = ...`
  updateHp(amount) {
    const calc = this.hp + amount;
    if (calc <= 0) {
      this.hp = 0;
      this.alive = false;
    } else {
      this.hp = calc;
    }
  }
}

const char = new Character();
console.log(char.hp);
char.updateHp(50);
console.log(char.hp);