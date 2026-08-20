/**
 * the decorator pattern can be used to extend an object with some functionalites
 * a decorator can be thought of as a wrapper it's just an object that wraps the original object
 * this decroator can extend the behavior of the orignal object
 *
 * 1. open-closed princples: adding new behavior involves making a new decorator
 *
 * 2. favor composition over inhertince: although the decorator extends the component class
 * it doesn't focus on the inherited behvior rather it's more focused on extedning behavior
 * by using delegation (delegation is just calling the method of the wrapped object)
 *
 */

abstract class Beverage {
  #description: string = "No description";
  constructor() {}
  get description() {
    return this.#description;
  }
  set description(description) {
    this.#description = description;
  }
  abstract cost(): number;
}

class Latte extends Beverage {
  constructor() {
    super();
    this.description = "Latte";
  }
  cost(): number {
    return 12;
  }
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }
  cost() {
    return 1.5;
  }
}

abstract class BevarageDecorator extends Beverage {
  beverageComponent: Beverage;

  constructor(beverage: Beverage, description: string) {
    super();
    this.description = beverage.description + " + " + description;
    this.beverageComponent = beverage;
  }
}
class MochaDecorator extends BevarageDecorator {
  constructor(beverage: Beverage) {
    super(beverage, "Mocha");
  }
  cost() {
    return this.beverageComponent.cost() + 3;
  }
}

class WhipDecorator extends BevarageDecorator {
  constructor(beverage: Beverage) {
    super(beverage, "Whip");
    this.beverageComponent = beverage;
  }

  cost(): number {
    return this.beverageComponent.cost() + 2;
  }
}

const cup = new WhipDecorator(new MochaDecorator(new Latte()));
console.log(cup.description);
console.log(cup.cost());
