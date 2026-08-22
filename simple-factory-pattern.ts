/**
 * according to Head first design patterns book
 * `simple factory` is when we create our objects using another concrete object -lets call it `ObjectCreator`-
 * and we use composotion to compose that `ObjectCreator` object with the class that needs it to create objects
 *
 * in the following examples the PizzaStore will be composed with the AmericanPizzaFactory
 *
 * seems like the only differen between this andthe abstract factory method is that here our factory doesn't
 * implement anything
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
class CheesePiza extends Pizza {}
class ChickenPiza extends Pizza {}
class PizzaCreator {
  // this is our ObjectCreator
  create(type: PizzaType): Pizza {
    if (type == "cheese") {
      return new CheesePiza("Cheese Pizza");
    } else if (type == "chickn") {
      return new ChickenPiza("Chicken Pizza");
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

const AmericanPizzaStore = new PizzaStore(new PizzaCreator());
AmericanPizzaStore.createPizza("cheese");
