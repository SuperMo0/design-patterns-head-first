/**
 * the decorator pattern can be used to extend an object with some functionalites
 * a decorator can be thought of as a wrapper it's just an object that wraps the original object
 * this decroator can extend the behavior of the orignal object
 *
 * 1. open-closed princples: adding new behavior involves making a new decorator
 *
 * 2. favor composition over inhertince:
 * although the decorator extends the component class
 * it doesn't focus on the inherited behvior rather
 * it's more focused on extedning behavior
 * by using delegation
 * (delegation is just calling the method of the wrapped object)
 *
 * We’re going to see a much better way of
 * creating decorated objects when we cover the
 * Factory and Builder Design Patterns.
 *
 */

type CupSize = "small" | "large" | "xlarge";
abstract class Beverage {
  #description: string;
  #size: CupSize;
  constructor(description: string, size: CupSize) {
    this.#description = description;
    this.#size = size;
  }
  get description() {
    return this.#description + " " + this.#size;
  }
  set description(description) {
    this.#description = description;
  }

  get size() {
    return this.#size;
  }
  set size(size: CupSize) {
    this.#size = this.size;
  }
  abstract cost(): number;
}

class Latte extends Beverage {
  constructor(size: CupSize) {
    super("Latte", size);
  }
  cost(): number {
    switch (this.size) {
      case "small": {
        return 12;
      }
      case "large": {
        return 14;
      }
      case "xlarge": {
        return 15;
      }
    }
  }
}

class Espresso extends Beverage {
  constructor(size: CupSize) {
    super("Espresso", size);
  }
  cost(): number {
    switch (this.size) {
      case "small": {
        return 12;
      }
      case "large": {
        return 14;
      }
      case "xlarge": {
        return 15;
      }
    }
  }
}

abstract class BevarageDecorator extends Beverage {
  beverageComponent: Beverage;

  constructor(beverage: Beverage, description: string) {
    super(beverage.description + " + " + description, beverage.size);
    this.beverageComponent = beverage;
  }
}
class MochaDecorator extends BevarageDecorator {
  constructor(beverage: Beverage) {
    super(beverage, "Mocha");
  }
  cost(): number {
    switch (this.size) {
      case "small": {
        return this.beverageComponent.cost() + 1;
      }
      case "large": {
        return this.beverageComponent.cost() + 2;
      }
      case "xlarge": {
        return this.beverageComponent.cost() + 3;
      }
    }
  }
}

class WhipDecorator extends BevarageDecorator {
  constructor(beverage: Beverage) {
    super(beverage, "Whip");
    this.beverageComponent = beverage;
  }
  cost(): number {
    switch (this.size) {
      case "small": {
        return this.beverageComponent.cost() + 1;
      }
      case "large": {
        return this.beverageComponent.cost() + 2;
      }
      case "xlarge": {
        return this.beverageComponent.cost() + 3;
      }
    }
  }
}

const cup = new WhipDecorator(new MochaDecorator(new Latte("large")));
console.log(cup.description);
console.log(cup.cost());
