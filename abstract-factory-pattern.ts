/**
 * so the way I see this in 2026/8/22 is that this pattern is similar to the simple factory but we just have
 * an extra abtract factory class that we implement to create our concrete `OjbectCreator` which is going to be
 * composed with the client class
 *
 * so abtract factory uses composition while factory method uses inhertince
 *
 * which one to use? I have no Idea, pizza examples are definelty usless and we need to think more
 * about which one to use when we are
 *
 * this pattern as all other creator pattern helps with the dependency inversion princple because
 * because the client code now will use the abstract factory type and will also use the abstract class
 * for the products being produced by the factory
 *
 *  notice that this pattern uses the factory method to acheive what it wants to acheive
 *
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
class CheesePiza extends Pizza {}
class ChickenPiza extends Pizza {}

abstract class PizzaFactory {
	constructor() {}
	abstract create(type: PizzaType): Pizza;
	// usually we go for this pattern because we have many factory methods
	// but here in this silly example we only have one factory method so this abstract class might make no sense
	// in reality you might have more and more factory methods so this abstract class will make more sense
}
class AmericanPizzaFactory implements PizzaFactory {
	// this is our ObjectCreator
	create(type: PizzaType): Pizza {
		if (type == "cheese") {
			return new CheesePiza("American Cheese Pizza");
		} else if (type == "chickn") {
			return new ChickenPiza("American Chicken Pizza");
		} else {
			throw Error("Unknown pizza!");
		}
	}
}
class PizzaStore {
	pizzaFactory: PizzaFactory;

	constructor(pizzaCreator: PizzaFactory) {
		this.pizzaFactory = pizzaCreator;
	}

	createPizza(type: PizzaType) {
		// this class doesn't know or care what creator he is dealing with
		const pizza = this.pizzaFactory.create(type);
		pizza.serve();
	}
}

const AmericanPizzaStore = new PizzaStore(new AmericanPizzaFactory());
AmericanPizzaStore.createPizza("cheese");
