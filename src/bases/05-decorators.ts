class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`NO QUIERO!!!`);
  }
  speak() {
    console.log(`NO QUIERO HABLAR!`);
  }
}

const MyDecorator = () => {
  //cuando se pone un decorador hay un target
  return (target: Function) => {
    return NewPokemon;
  };
};

//el decorador tiene acceso a la definicion de la clase va a ponerle expandir, remover, sobrescribir, extender
//un decorador no es mas que una simple funcion que tiene acceso a la definicion de la clase
@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }
  speak() {
    console.log(`${this.name}! ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, "charmander");

charmander.scream();
charmander.speak();
