/**
 * strategy pattern is usfull when we have a behavior that varies
 * in the following -not so serious- example we are trying to represent all kinds of ducks
 * all ducks can swim but they have different quack behavior and different fly behavior
 *
 *
 * this pattern helps us achieve the following design principles:
 *
 * 1. favor compostion over inhertince
 * the part where we keep behavior as an attribuite in the context class
 *
 * 2. design for an interface and not for an implementation:
 * the fact that all different behaviors implements the behaviour abstract class
 *
 * 3. open closed princple
 * adding a new behavior involves adding a new code (new concrete behavior class)
 * rather than altering existing code
 */

interface QuackBehavior {
	quack: () => void;
}
interface FlyBehavior {
	fly: () => void;
}

class Quack implements QuackBehavior {
	quack() {
		console.log("Quack!");
	}
}

class Squeak implements QuackBehavior {
	quack() {
		console.log("Squeak!");
	}
}

class MuteQuack implements QuackBehavior {
	quack() {
		console.log("<<Silence>>");
	}
}

class FlyWithWings implements FlyBehavior {
	fly() {
		console.log("Flying with my wings!");
	}
}

class FlyNoWay implements FlyBehavior {
	fly() {
		console.log("I can't fly :(");
	}
}

class FlyRocketPowered implements FlyBehavior {
	fly() {
		console.log("I'm flying with rocket!");
	}
}
class Duck {
	#quackBehavior: QuackBehavior;
	#flyBehavior: FlyBehavior;
	constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
		this.#quackBehavior = quackBehavior;
		this.#flyBehavior = flyBehavior;
	}
	protected set quackBehavior(quackBehavior: QuackBehavior) {
		this.#quackBehavior = quackBehavior;
	}

	protected get quackBehavior() {
		return this.#quackBehavior;
	}

	protected set flyBehavior(flyBehavior: FlyBehavior) {
		this.#flyBehavior = flyBehavior;
	}

	protected get flyBehavior() {
		return this.#flyBehavior;
	}

	performFLy() {
		this.#flyBehavior.fly();
	}
	performQuack() {
		this.#quackBehavior.quack();
	}
	swim() {
		console.log("All docs float, even decoys!");
	}
}

class MalardDuck extends Duck {
	constructor() {
		super(new Quack(), new FlyWithWings());
	}
}

const malardDuck = new MalardDuck();
malardDuck.performFLy();
malardDuck.performQuack();
malardDuck.swim();

class ModelDuck extends Duck {
	constructor() {
		super(new Quack(), new FlyNoWay());
	}
}

const modelDuck = new ModelDuck();
modelDuck.performFLy();
