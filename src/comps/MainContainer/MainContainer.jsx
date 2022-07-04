import { useContext } from 'react'
import { pokemonsContext } from '../../App'
import Card from '../Card/Card';

const MainContainer = () => {
  let pokemons = useContext(pokemonsContext);

  return (
    <main className="main-container">
      <ul className="main-listContainer">
        {pokemons.map((pokemon)=>{
            return (<Card key={pokemon.id} pokemon={pokemon} />)
        })}
      </ul>
    </main>
  )
}

export default MainContainer