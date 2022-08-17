export const pokemonsIds: number[] = [1, 20, 30, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number | undefined;
}

export const bulbasor: Pokemon = {
  id: 1,
  name: "bulbasor",
};

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasor);
