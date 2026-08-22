/**
 * factory method pattern according to Head First Design pattern
 *
 * we have an abstract class that has an abtract method called create
 * every time we need a different object creation behavior we extend this class
 * and implement it's create method
 *
 * now this might seem like the simple factory method but there is a difference
 * in this method we don't use composition, the class that we are extending is not another ObjectCreator interface
 * like in the simple factory pattern
 *
 */
type PizzaType = "cheese" | "chickn";

abstract class Pizza {
  description: string;
  constructor(description: string) {
    this.description = description;
  }
  serve() {
    console.log(this.description);
  }
}

abstract class PizzaStore {
  constructor() {}

  order(type: PizzaType) {
    const pizza = this.create(type);
    pizza.serve();
  }

  abstract create(type: PizzaType): Pizza;
}

class AmericanCheesePiza extends Pizza {}
class AmericanChickenPiza extends Pizza {}
class AmericanPizzaStore extends PizzaStore {
  constructor() {
    super();
  }

  create(type: PizzaType): Pizza {
    // the subclass is responsible for the implementation of the create method
    if (type == "cheese") {
      return new AmericanCheesePiza("American Cheese");
    } else if (type == "chickn") {
      return new AmericanChickenPiza("American Chicken Pizza");
    } else throw Error("Unknown Pizza!");
  }
}

const americanPizzaStore: PizzaStore = new AmericanPizzaStore();
americanPizzaStore.order("cheese");
