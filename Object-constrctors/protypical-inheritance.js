//Just as we use Object.getPrototypeOf() to ‘get’ or view the prototype of an object, we can use Object.setPrototypeOf() to ‘set’ or mutate it.

function person(name) {
    this.name = name;
}

person.prototype.sayName = function() {
    console.log(`Hello, my name is ${this.name}`);
};

function player(name, marker) {
    this.name = name;
    this.marker = marker;
}

player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(player.prototype, person.prototype);
Object.getPrototypeOf(player.prototype); // returns Person.prototype