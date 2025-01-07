import { useEffect, useState } from 'react';
import { getPokemons } from '~/models/PokemonResults';

import { Link, Outlet } from '@remix-run/react';

export default function Pokemon() {
  const [ pokemonList, setPokemonList ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemons(`https://pokeapi.co/api/v2/pokemon/`);
      setPokemonList(response);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-row space-x-2">
      <div>
        {pokemonList ? (
          pokemonList.results?.map((pokemon) => (
            <div key={pokemon.name}>
              <Link
                to={`${pokemon.url.slice(0, -1).split("/").pop()}`}
              >
                {pokemon.name}
              </Link>
                
            </div>
          ))
        ) : (
          <p>データ取得中です...</p>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}