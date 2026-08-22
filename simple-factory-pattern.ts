/**
 * according to Head first design patterns book
 * `simple factory` is when we create our objects using another concrete object -lets call it `ObjectCreator`-
 * and we use composotion to compose that `ObjectCreator` object with the class that needs it to create objects
 *
 * in the following examples the PizzaStore can be composed with any PizzaCreator
 * in this example we have AmericanPizzaCreator but we might have ItalinPizzaCreator also
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
interface PizzaCreator {
  create(type: PizzaType): Pizza;
}

class AmericanCheesePiza extends Pizza {}
class AmericanChickenPiza extends Pizza {}
class AmericanPizzaCreator implements PizzaCreator {
  // this is our ObjectCreator
  create(type: PizzaType): Pizza {
    if (type == "cheese") {
      return new AmericanCheesePiza("American Cheese Pizza");
    } else if (type == "chickn") {
      return new AmericanChickenPiza("American Chicken Pizza");
    } else {
      throw Error("Unknown pizza!");
    }
  }
}
class PizzaStore {
  pizzaCreator: PizzaCreator;

  constructor(pizzaCreator: PizzaCreator) {
    this.pizzaCreator = pizzaCreator;
  }

  createPizza(type: PizzaType) {
    // this class doesn't know or care what creator he is dealing with
    const pizza = this.pizzaCreator.create(type);
    pizza.serve();
  }
}

const AmericanPizzaStore = new PizzaStore(new AmericanPizzaCreator());
AmericanPizzaStore.createPizza("cheese");
