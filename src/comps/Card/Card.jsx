import "./Card.scss"

const Card = ({pokemon}) => {
  return (
      <li className="card-container">
        <span className="card-title">
            {pokemon.name}
        </span>
        <span className="card-number">
            {pokemon.id}
        </span>
        {/* HARD CODED CUZ THE API LACKS DATA */}
        <img className="card-image" 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        alt="sprite" />
      </li>
  )
}

export default Card