import * as swNames from "starwars-names";

export class Greeter {

    greet(name) {

        window.confirm(`Hallo ${name}!`);
    }
}

export class StarwarsGreeter {

    greet(name) {

        const character = swNames.random();

        window.confirm(`Hallo ${name}, Grüße von ${character}!`);
    }
}