import { useEffect, useContext } from 'react'
import { cardsContext } from '../../App'
import { useLazyQuery, gql } from '@apollo/client';
import Card from '../Card/Card';

const POKE_QUERY = gql`{
    pokemon_v2_pokemon(limit: 8, offset: 0) {
        id
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
    }
}`;

const MainContainer = () => {
  const [getPokemon, { loading, error, data }] = useLazyQuery(POKE_QUERY);
  let cards = useContext(cardsContext);

  useEffect(()=>{
    getPokemon()
  },[])

  return (
    <main>
        {cards && data.pokemon_v2_pokemon.map((poke)=>{
            return (<Card pokemon={poke} />)
        })}
    </main>
  )
}

export default MainContainer