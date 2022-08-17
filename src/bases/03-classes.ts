import axios from "axios";
import {
  PokemonApiResponse,
  Move,
} from "../interfaces/pokeapi-response.interface";
//classes abstraccion de un objeto de la vida real
export class Pokemon {
  /*   public id: number;
  public name: string; */

  //es el método cuando se crea una instancia de pokemon
  //readonly: no se puede cambiar el valor de la propiedad

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokemonApiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    return data.moves;
  }
}

export const charmander = new Pokemon(1, "charmander");

console.log(charmander.imageUrl);

/* charmander.scream();
charmander.speak(); */

charmander.getMoves();
