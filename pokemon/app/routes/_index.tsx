import { Link, Outlet } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <div>
        <main>
          <Link to="pokemon">PokemonList</Link>
        </main>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}