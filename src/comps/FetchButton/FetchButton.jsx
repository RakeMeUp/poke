import { useContext, useState} from "react"
import { pokemonsContext } from "../../App"
import Fetcher from '../../Funcs/Fetcher/Fetcher';

export default function FetchButton() {
  let {pokemons, setPokemons} = useContext(pokemonsContext)
  let [offset, setOffset] = useState(0)

  //TODO: LOADING, ERROR handle
  const [,, data] = Fetcher(offset);
  
  //TODO: understand why await
  const handleClick = async () =>{
    await setPokemons(pokemons.concat(data.pokemon_v2_pokemon))
    await setOffset(offset+8)
  }

  return (
    <button className="footer-button" onClick={handleClick}>FetchButton</button>
  )
}
