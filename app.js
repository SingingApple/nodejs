const file = require("./stuff");
const events = require("events");
// const myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", (msg) => {
//   console.log(msg);
// });

// myEmitter.emit("someEvent", "emitted");
const util = require("util");
class Person {
  constructor(name) {
    this.name = name;
  }
}
util.inherits(Person, events.EventEmitter);

const james = new Person("james");
const ryu = new Person("ryu");
const mario = new Person("mario");
const people = [james, ryu, mario];
console.log(people);
people.forEach((person) => {
  person.on("speak", (msg) => {
    console.log(msg);
  });

  person.emit("speak", "bola");
});
