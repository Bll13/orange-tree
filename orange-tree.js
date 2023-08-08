class OrangeTree {
  constructor(age, hight) {
    this.age = age;
    this.hight = hight;
    this.oranges = [];
  }

  passGrowingSeason() {
    if (this.age < 100) this.age += 1;
    if (this.hight < 25) this.hight += 2.5;
    else this.hight = 25;
    const allOranges = 100 + Math.floor(Math.random() * 200);
    if (this.age >= 6) {
      for (let i = 0; i < allOranges; i++) {
        const orange = new Orange();
        this.oranges.push(orange);
      }
    }
  }

  isMature() {
    if (this.age >= 6) return true;
  }

  hasOranges() {
    //  Returns true if there are any oranges on the tree, false otherwise
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error("This tree has no oranges");
    }
    //  orange-picking logic goes here
  }
}

module.exports = OrangeTree;
