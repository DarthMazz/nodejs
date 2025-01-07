interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResults {
  count: number;
  next: string;
  results: Pokemon[];
}

interface PokemonDetail {
  name: string;
}

export const getPokemons = async (url: string): Promise<PokemonResults> => {
  const results = await fetch(url);
  const resultsData = (await results.json()) as PokemonResults;
  return resultsData;
};

export const getPokemon = async (url: string): Promise<PokemonDetail> => {
  const result = await fetch(url);
  const resultData = await result.json();
  return resultData;
};
