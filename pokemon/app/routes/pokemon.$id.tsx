import invariant from 'tiny-invariant';
import { getPokemon } from '~/models/PokemonResults';

import { LoaderFunctionArgs } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "Missing pokemon id param");
  const pokemon = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  console.log(pokemon);
  return json({ pokemon });
};

export default function Pokemon() {
  const { pokemon } = useLoaderData<typeof loader>();
  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  )
}