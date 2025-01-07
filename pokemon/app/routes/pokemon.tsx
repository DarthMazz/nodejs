import { getPokemons } from '~/models/PokemonResults';

import { json, Link, Outlet, useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const pokemonList = await getPokemons(`https://pokeapi.co/api/v2/pokemon/`);
  return json({ pokemonList })
};

export default function Pokemon() {
  const { pokemonList } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-row space-x-2">
      <div>
        {
          pokemonList.results.map((pokemon) => (
            <div key={pokemon.name}>
              <Link
                to={`${pokemon.url.slice(0, -1).split("/").pop()}`}
              >
                {pokemon.name}
              </Link>
                
            </div>
          ))
        }
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}